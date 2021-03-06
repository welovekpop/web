import _jsx from "@babel/runtime/helpers/builtin/jsx";
import _extends from "@babel/runtime/helpers/builtin/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/builtin/objectWithoutProperties";
import _createClass from "@babel/runtime/helpers/builtin/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/builtin/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/builtin/inheritsLoose";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

var TextField =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(TextField, _React$Component);

  function TextField() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.refInput = function (input) {
      _this.input = input;
    }, _temp) || _assertThisInitialized(_this);
  }

  var _proto = TextField.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        type = _this$props.type,
        icon = _this$props.icon,
        className = _this$props.className,
        props = _objectWithoutProperties(_this$props, ["type", "icon", "className"]);

    return _jsx("div", {
      className: cx('TextField', className)
    }, void 0, React.createElement("input", _extends({
      ref: this.refInput,
      className: "TextField-input",
      type: type
    }, props)), _jsx("div", {
      className: "TextField-icon"
    }, void 0, icon));
  };

  _createClass(TextField, [{
    key: "value",
    get: function get() {
      return this.input.value;
    }
  }]);

  return TextField;
}(React.Component);

TextField.defaultProps = {
  type: 'text'
};
export { TextField as default };
TextField.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.element
} : {};
//# sourceMappingURL=TextField.js.map
