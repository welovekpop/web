"use strict";

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _Uwave = _interopRequireDefault(require("./Uwave"));

var _youtube = _interopRequireDefault(require("./sources/youtube"));

var _soundcloud = _interopRequireDefault(require("./sources/soundcloud"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var uw = new _Uwave.default({
  apiUrl: 'https://u-wave-demo.now.sh/api',
  socketUrl: 'wss://u-wave-demo.now.sh',
  emoji: {}
}); // Configure the Media sources to be used by this üWave client instance.

uw.source((0, _youtube.default)());
uw.source((0, _soundcloud.default)());

var _ref =
/*#__PURE__*/
(0, _jsx2.default)(_react.default.Fragment, {}, void 0, (0, _jsx2.default)("h2", {}, void 0, "Size report"), (0, _jsx2.default)("p", {}, void 0, "Generated by webpack-bundle-analyzer. ", (0, _jsx2.default)("a", {
  href: "/report.html",
  target: "_blank"
}, void 0, "View size report")));

uw.setAboutPageComponent(function () {
  return _ref;
});
window.uw = uw;
uw.build().then(function () {
  uw.renderToDOM(document.querySelector('#app'));
  document.querySelector('#app-loading').innerHTML = '';
  document.querySelector('#jss').textContent = '';
}).catch(function (err) {
  document.querySelector('.LoadingScreen-notice').textContent = "Error: " + err.message;
  setTimeout(function () {
    throw err;
  }, 0);
});
//# sourceMappingURL=demo.js.map