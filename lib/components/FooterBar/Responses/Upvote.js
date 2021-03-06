"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactI18next = require("react-i18next");

var _ThumbUp = _interopRequireDefault(require("@material-ui/icons/ThumbUp"));

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var Upvote = function Upvote(_ref) {
  var t = _ref.t,
      disabled = _ref.disabled,
      active = _ref.active,
      count = _ref.count,
      onUpvote = _ref.onUpvote;
  return (0, _jsx2.default)(_Button.default, {
    disabled: disabled,
    tooltip: t('votes.upvote'),
    onClick: onUpvote,
    count: count
  }, void 0, (0, _jsx2.default)(_ThumbUp.default, {
    className: active ? 'ResponseButton-icon--upvoted' : ''
  }));
};

Upvote.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  onUpvote: _propTypes.default.func.isRequired,
  count: _propTypes.default.number.isRequired,
  disabled: _propTypes.default.bool,
  active: _propTypes.default.bool
} : {};

var _default = enhance(Upvote);

exports.default = _default;
//# sourceMappingURL=Upvote.js.map
