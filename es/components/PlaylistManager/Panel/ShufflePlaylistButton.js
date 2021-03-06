import _jsx from "@babel/runtime/helpers/builtin/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';
import { translate } from 'react-i18next';
import CircularProgress from "@material-ui/core/es/CircularProgress";
import Tooltip from "@material-ui/core/es/Tooltip";
import IconButton from "@material-ui/core/es/IconButton";
import ShuffleIcon from "@material-ui/icons/es/Shuffle";
var enhance = compose(withState('isLoading', 'setLoading', false), withHandlers({
  onClick: function onClick(props) {
    return function () {
      props.setLoading(true);
      props.onShuffle().then(function () {
        props.setLoading(false);
      }, function () {
        props.setLoading(false);
      });
    };
  }
}), translate());

var _ref2 =
/*#__PURE__*/
_jsx(CircularProgress, {
  size: "100%"
});

var _ref3 =
/*#__PURE__*/
_jsx(ShuffleIcon, {});

var ShuffleButton = function ShuffleButton(_ref) {
  var t = _ref.t,
      isLoading = _ref.isLoading,
      onClick = _ref.onClick;
  return _jsx(Tooltip, {
    title: t('playlists.shuffle'),
    placement: "top"
  }, void 0, _jsx(IconButton, {
    className: "PlaylistMeta-iconButton",
    onClick: onClick
  }, void 0, isLoading ? _ref2 : _ref3));
};

ShuffleButton.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onShuffle: PropTypes.func.isRequired // eslint-disable-line react/no-unused-prop-types

} : {};
export default enhance(ShuffleButton);
//# sourceMappingURL=ShufflePlaylistButton.js.map
