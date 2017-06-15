const React = require('react')
const ReactDOM = require('react-dom/server')
const { ImagesetPreview } = require('../')

describe('ImagesetPreview', () => {

  const props = {
    images: [
      {
        type: "artwork",
        id: "58660f1f8b3b816083003842",
        slug: "doron-langberg-drifting-off-1",
        date: "2014",
        title: "Drifting Off",
        image: "https://d32dm0rphc51dk.cloudfront.net/Ly7Wf473fkGz5_UFzdOMuA/larger.jpg",
        partner: {
          name: "Capsule Shanghai"
        },
        artists: [
          {
            name: "Doron Langberg"
          }
        ],
        width: 6163,
        height: 7695
      },
      {
        url: "https://artsy-media-uploads.s3.amazonaws.com/6QxOGTDBBgPgS70sObXTbg%2Ftumblr_m3x4odSU1i1qglq6wo1_1280.jpg",
        type: "image",
        width: 1200,
        height: 787,
        caption: "<p>Image via If They Used The Wrong Font Tumblr. </p>"
      }
    ]
  }

  const component = ReactDOM.renderToString(React.createElement(ImagesetPreview, props))

  it('renders an artwork type image', () => {
    component.should.containEql('img src="https://d32dm0rphc51dk.cloudfront.net/Ly7Wf473fkGz5_UFzdOMuA/larger.jpg"')
  })

  it('renders an image type image', () => {
    component.should.containEql('img src="https://artsy-media-uploads.s3.amazonaws.com/6QxOGTDBBgPgS70sObXTbg%2Ftumblr_m3x4odSU1i1qglq6wo1_1280.jpg"')
  })

  it('renders an Enter Slideshow container', () => {
    component.should.containEql('Enter Slideshow')
  })

  it('renders the slideshow length', () => {
    component.should.containEql('2</span>')
  })

})
