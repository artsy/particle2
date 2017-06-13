'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageCollectionDisplayArtworkImage = function (_Component) {
  _inherits(ImageCollectionDisplayArtworkImage, _Component);

  function ImageCollectionDisplayArtworkImage() {
    _classCallCheck(this, ImageCollectionDisplayArtworkImage);

    return _possibleConstructorReturn(this, (ImageCollectionDisplayArtworkImage.__proto__ || Object.getPrototypeOf(ImageCollectionDisplayArtworkImage)).apply(this, arguments));
  }

  _createClass(ImageCollectionDisplayArtworkImage, [{
    key: 'formatArtistNames',
    value: function formatArtistNames(artwork) {
      if (this.props.artwork.artists != null ? this.props.artwork.artists[0] : undefined) {
        var names = this.props.artwork.artists.map(function (artist) {
          return artist.name;
        });
        return names.join(', ');
      } else {
        return this.props.artwork.artist != null ? this.props.artwork.artist.name : undefined;
      }
    }
  }, {
    key: 'renderPartner',
    value: function renderPartner(artwork) {
      if (artwork.partner.name) {
        return _react2.default.createElement(
          'p',
          null,
          this.props.artwork.partner.name
        );
      }
    }
  }, {
    key: 'renderTitle',
    value: function renderTitle(artwork) {
      if (artwork.partner.title) {
        return _react2.default.createElement(
          'span',
          { className: 'title' },
          this.props.artwork.title
        );
      }
    }
  }, {
    key: 'renderDate',
    value: function renderDate(artwork) {
      if (artwork.partner.date) {
        return _react2.default.createElement(
          'span',
          { className: 'date' },
          this.props.artwork.date
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('img', {
          src: this.props.artwork.image,
          className: 'esic-artwork' }),
        _react2.default.createElement(
          'div',
          { className: 'esic-caption' },
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'strong',
              null,
              this.formatArtistNames(this.props.artwork)
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            this.renderTitle(this.props.artwork),
            this.renderDate(this.props.artwork)
          ),
          this.renderPartner(this.props.artwork)
        )
      );
    }
  }]);

  return ImageCollectionDisplayArtworkImage;
}(_react.Component);

;
exports.default = ImageCollectionDisplayArtworkImage;