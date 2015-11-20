import { dispatch } from '../dispatcher';
import { get, post } from '../utils/Request';
import * as Session from '../utils/Session';
import LoginStore from '../stores/LoginStore';
import { advance } from './AdvanceActionCreators';
import { setPlaylists, selectPlaylist } from './PlaylistActionCreators';
import { setUsers } from './UserActionCreators';

const debug = require('debug')('uwave:actions:login');

export function loginComplete({ jwt, user }) {
  dispatch({
    type: 'loginComplete',
    payload: { jwt, user }
  });
  Session.set(jwt);
}

export function initState() {
  dispatch({ type: 'loadingPlaylists' });
  get('/v1/now')
    .then(res => res.json())
    .then(state => {
      setUsers(state.users || []);
      setPlaylists(state.playlists || []);
      if (state.booth) {
        // TODO don't set this when logging in _after_ entering the page?
        advance(state.booth);
      }
      if (state.user) {
        loginComplete({
          jwt: LoginStore.getToken(),
          user: state.user
        });
      }
      if (state.activePlaylist) {
        dispatch({
          type: 'activatedPlaylist',
          payload: { playlistID: state.activePlaylist }
        });
        selectPlaylist(state.activePlaylist);
      }
    });
}

export function setJWT(jwt) {
  dispatch({
    type: 'setSession',
    payload: { jwt }
  });
}

export function login({ email, password }) {
  return post('/v1/auth/login', { email, password })
    .then(res => res.json())
    .then(res => {
      setJWT(res.jwt);
      initState();
      return res;
    })
    .catch(error => {
      dispatch({
        type: 'loginComplete',
        error: true,
        payload: error
      });
    });
}

export function register({ email, username, password }) {
  dispatch({ type: 'registerStart' });
  post('/v1/auth/register', { email, username, password, passwordRepeat: password })
    .then(res => res.json())
    .then(user => {
      debug('registered', user);
      dispatch({
        type: 'registerComplete',
        payload: { user }
      });
      login({ email, password });
    })
    .catch(err => {
      debug('registration failed', err);
      dispatch({
        type: 'registerComplete',
        error: true,
        payload: err
      });
    });
}

function logoutComplete() {
  dispatch({ type: 'logoutComplete' });
  setPlaylists([]);
}

export function logout() {
  const me = LoginStore.getUser();
  if (me) {
    dispatch({ type: 'logoutStart' });
    del(`/v1/auth/session/${me._id}`)
      .then(logoutComplete)
      .catch(logoutComplete);
  }
  Session.unset();
  logoutComplete();
}

export function openLoginModal() {
  dispatch({
    type: 'openLoginModal',
    meta: {
      register: false
    }
  });
}
export function openRegisterModal() {
  dispatch({
    type: 'openLoginModal',
    meta: {
      register: true
    }
  });
}