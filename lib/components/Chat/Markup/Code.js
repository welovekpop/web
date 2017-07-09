'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Code = function Code(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties3.default)(_ref, ['children']);

  return _react2.default.createElement('code', props, children);
};

Code.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.node.isRequired
} : {};

exports.default = Code;
//# sourceMappingURL=Code.js.map
//# sourceMappingURL=Code.js.map