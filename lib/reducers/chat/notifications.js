'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduceNotifications;

var _ActionTypes = require('../../constants/ActionTypes');

function reduceNotifications(state, _ref) {
  var type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case _ActionTypes.USER_JOIN:
      return state.concat([{
        type: 'userJoin',
        _id: 'userJoin-' + payload.user._id + '-' + payload.timestamp,
        user: payload.user,
        timestamp: payload.timestamp
      }]);
    case _ActionTypes.USER_LEAVE:
      return state.concat([{
        type: 'userLeave',
        _id: 'userLeave-' + payload.user._id + '-' + payload.timestamp,
        user: payload.user,
        timestamp: payload.timestamp
      }]);
    case _ActionTypes.CHANGE_USERNAME:
      return state.concat([{
        type: 'userNameChanged',
        _id: 'userNameChanged-' + payload.userID + '-' + payload.timestamp,
        user: payload.user,
        newUsername: payload.username,
        timestamp: payload.timestamp
      }]);
    default:
      return state;
  }
}
//# sourceMappingURL=notifications.js.map
//# sourceMappingURL=notifications.js.map