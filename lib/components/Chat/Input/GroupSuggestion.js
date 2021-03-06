"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _People = _interopRequireDefault(require("@material-ui/icons/People"));

var _Suggestion = _interopRequireDefault(require("./Suggestion"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_ListItemIcon.default, {}, void 0, (0, _jsx2.default)(_People.default, {}));

var GroupSuggestion = function GroupSuggestion(_ref) {
  var group = _ref.value,
      props = (0, _objectWithoutProperties2.default)(_ref, ["value"]);
  return _react.default.createElement(_Suggestion.default, props, _ref2, (0, _jsx2.default)(_ListItemText.default, {
    primary: group
  }));
};

GroupSuggestion.propTypes = process.env.NODE_ENV !== "production" ? {
  value: _propTypes.default.string.isRequired
} : {};
var _default = GroupSuggestion;
exports.default = _default;
//# sourceMappingURL=GroupSuggestion.js.map
