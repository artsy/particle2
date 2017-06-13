const React = require('react')
const ReactDOM = require('react-dom/server')
const { ArtworkImage } = require('../')

describe('ArtworkImage', () => {
  it('renders an artwork image', () => {
    ReactDOM.renderToString(React.createElement(ArtworkImage, {
      artwork: {
        artists: [],
        partner: {},
        image: {}
      }
    })).should.containEql("esic-artwork")
  })
})
