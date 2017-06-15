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

var DisplayArtwork = function (_Component) {
  _inherits(DisplayArtwork, _Component);

  function DisplayArtwork() {
    _classCallCheck(this, DisplayArtwork);

    return _possibleConstructorReturn(this, (DisplayArtwork.__proto__ || Object.getPrototypeOf(DisplayArtwork)).apply(this, arguments));
  }

  _createClass(DisplayArtwork, [{
    key: 'formatArtistNames',
    value: function formatArtistNames(artwork) {
      if (artwork.artists != null ? artwork.artists[0] : undefined) {
        var names = artwork.artists.map(function (artist) {
          return artist.name;
        });
        return names.join(', ');
      } else {
        return artwork.artist != null ? artwork.artist.name : undefined;
      }
    }
  }, {
    key: 'renderTitle',
    value: function renderTitle(artwork) {
      if (artwork.title) {
        return _react2.default.createElement(
          'span',
          { className: 'title' },
          _react2.default.createElement(
            'em',
            null,
            artwork.title
          )
        );
      }
    }
  }, {
    key: 'renderDate',
    value: function renderDate(artwork) {
      if (artwork.date) {
        return _react2.default.createElement(
          'span',
          { className: 'date' },
          artwork.date
        );
      }
    }
  }, {
    key: 'renderSpacer',
    value: function renderSpacer(artwork) {
      if (artwork.title && artwork.date) {
        return _react2.default.createElement(
          'span',
          { className: 'spacer' },
          ', '
        );
      }
    }
  }, {
    key: 'renderPartner',
    value: function renderPartner(artwork) {
      if (artwork.partner.name) {
        return _react2.default.createElement(
          'p',
          null,
          artwork.partner.name
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var artwork = this.props.artwork;

      return _react2.default.createElement(
        'div',
        { className: 'display-artwork' },
        _react2.default.createElement('img', {
          src: artwork.image,
          className: 'display-artwork__image' }),
        _react2.default.createElement(
          'div',
          { className: 'display-artwork__caption', style: styles },
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'strong',
              null,
              this.formatArtistNames(artwork)
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            this.renderTitle(artwork),
            this.renderSpacer(artwork),
            this.renderDate(artwork)
          ),
          this.renderPartner(artwork)
        )
      );
    }
  }]);

  return DisplayArtwork;
}(_react.Component);

;
exports.default = DisplayArtwork;


var styles = {
  color: '#666',
  fontSize: 15,
  lineHeight: 1.25,
  whiteSpace: 'initial',
  fontFamily: "'Adobe Garamond W08', 'adobe-garamond-pro', 'AGaramondPro-Regular', 'Times New Roman', 'Times', 'serif'"
};