"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StrikeThrough = function StrikeThrough(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children"]);
  return _react.default.createElement("s", props, children);
};

StrikeThrough.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes.default.node.isRequired
} : {};
var _default = StrikeThrough;
exports.default = _default;
//# sourceMappingURL=StrikeThrough.js.map
