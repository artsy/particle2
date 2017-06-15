"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconImageSet = function (_Component) {
  _inherits(IconImageSet, _Component);

  function IconImageSet() {
    _classCallCheck(this, IconImageSet);

    return _possibleConstructorReturn(this, (IconImageSet.__proto__ || Object.getPrototypeOf(IconImageSet)).apply(this, arguments));
  }

  _createClass(IconImageSet, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        { id: "imageset", "data-name": "imageset", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 44 44" },
        _react2.default.createElement("path", { d: "M6760.67,551.72h-32v-32h32v32Zm-30-2h28v-28h-28v28Z", transform: "translate(-6728.67 -507.72)" }),
        _react2.default.createElement("polygon", { points: "38 37 36 37 36 8 7 8 7 6 38 6 38 37" }),
        _react2.default.createElement("polygon", { points: "44 31 42 31 42 2 13 2 13 0 44 0 44 31" })
      );
    }
  }]);

  return IconImageSet;
}(_react.Component);

exports.default = IconImageSet;