const React = require('react')
const ReactDOM = require('react-dom/server')
const { DisplayArtwork } = require('../')

describe('DisplayArtwork', () => {
  const component = ReactDOM.renderToString(React.createElement(DisplayArtwork, {
    artwork: {
      artists: [{name: 'Pablo Picasso'}, {name: 'Maya Lin'}],
      partner: { name: 'Gagosian Gallery'},
      image: 'image.jpg',
      date: '1967',
      title: 'A Very Important Artwork'
    }
  }))

  it('renders an artwork image', () => {
    component.should.containEql('img src="image.jpg"')
  })

  it('renders the artist name/s', () => {
    component.should.containEql('Pablo Picasso')
    component.should.containEql('Maya Lin')
  })

  it('renders the artwork title', () => {
    component.should.containEql('A Very Important Artwork</em>')
  })

  it('renders the artwork date', () => {
    component.should.containEql('1967')
  })

  it('renders the partner name', () => {
    component.should.containEql('Gagosian Gallery')
  })

  it('renders a spacer (between title and date)', () => {
    component.should.containEql('<span class="spacer"')
  })

})
