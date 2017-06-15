'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('./icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImagesetPreview = function (_Component) {
  _inherits(ImagesetPreview, _Component);

  function ImagesetPreview(props) {
    _classCallCheck(this, ImagesetPreview);

    var _this = _possibleConstructorReturn(this, (ImagesetPreview.__proto__ || Object.getPrototypeOf(ImagesetPreview)).call(this, props));

    _this.state = {
      visibleImages: _this.getVisibleImages(_this.props.images)
    };
    return _this;
  }

  _createClass(ImagesetPreview, [{
    key: 'getVisibleImages',
    value: function getVisibleImages(images) {
      var widths = [];
      var hidden = 0;
      images.map(function (item, i) {
        var adjustedWidth = 150 * item.width / item.height;
        widths.push(adjustedWidth);
        var total = widths.reduce(function (a, b) {
          return a + b;
        }, 0);
        var margins = widths.length * 10;
        if (total + margins + 50 > 560) {
          hidden = hidden + 1;
        }
      });
      return widths.length - hidden;
    }
  }, {
    key: 'renderImages',
    value: function renderImages(images) {
      var _this2 = this;

      var items = images.slice(0, 4).map(function (item, i) {
        var src = item.image ? item.image : item.url;
        if (i < _this2.state.visibleImages) {
          return _react2.default.createElement('img', {
            key: 'imageset-' + i,
            src: src || '',
            className: 'imageset-preview__image',
            style: styles.image });
        }
      }, this);
      return items;
    }
  }, {
    key: 'render',
    value: function render() {
      var images = this.props.images;


      if (images.length > 9) {
        styles.length.left = 4;
      }

      return _react2.default.createElement(
        'div',
        { className: 'imageset-preview', style: styles.imageset },
        _react2.default.createElement(
          'div',
          { className: 'imageset-preview__container', style: styles.container },
          this.renderImages(images)
        ),
        _react2.default.createElement(
          'div',
          { className: 'imageset-preview__remaining', style: styles.remaining },
          _react2.default.createElement(
            'div',
            { className: 'imageset-preview__icon', style: styles.iconContainer },
            _react2.default.createElement(_icons.IconImageSet, null),
            _react2.default.createElement(
              'span',
              { className: 'length', style: styles.length },
              images.length
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'imageset-preview__text' },
            'Enter Slideshow'
          )
        )
      );
    }
  }]);

  return ImagesetPreview;
}(_react.Component);

;

exports.default = ImagesetPreview;


var styles = {
  imageset: {
    maxWidth: 580,
    margin: 'auto',
    display: 'flex'
  },
  container: {
    display: 'flex'
  },
  image: {
    height: 150,
    width: 'auto',
    marginRight: 10
  },
  remaining: {
    height: 150,
    minWidth: 50,
    padding: 10,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #e5e5e5',
    fontSize: 11,
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontFamily: "'ITC Avant Garde Gothic W04', 'AvantGardeGothicITCW01D 731075', 'AvantGardeGothicITCW01Dm', 'Helvetica', 'sans-serif'"
  },
  iconContainer: {
    width: 32,
    marginBottom: 10,
    position: 'relative'
  },
  length: {
    position: 'absolute',
    left: 8,
    top: 8
  }
};