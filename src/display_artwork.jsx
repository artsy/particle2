import React, { Component } from 'react';

class DisplayArtwork extends Component {

  formatArtistNames(artwork) {
    if (artwork.artists != null ? artwork.artists[0] : undefined) {
      let names = artwork.artists.map(artist => artist.name);
      return names.join(', ');
    } else {
      return (artwork.artist != null ? artwork.artist.name : undefined);
    }
  }

  renderTitle(artwork) {
    if (artwork.title) {
      return <span className='title'><em>{artwork.title}</em></span>
    }
  }

  renderDate(artwork) {
    if (artwork.date) {
      return <span className='date'>{artwork.date}</span>
    }
  }

  renderSpacer(artwork) {
    if (artwork.title && artwork.date) {
      return <span className='spacer'>, </span>
    }
  }

  renderPartner(artwork) {
    if (artwork.partner.name) {
      return <p>{artwork.partner.name}</p>
    }
  }

  render() {
    const { artwork } = this.props;
    return (
      <div className='display-artwork'>
        <img
          src={artwork.image}
          className='display-artwork__image' />
        <div className='display-artwork__caption' style={styles}>
          <p><strong>{this.formatArtistNames(artwork)}</strong></p>
            <p>
              {this.renderTitle(artwork)}
              {this.renderSpacer(artwork)}
              {this.renderDate(artwork)}
            </p>
          {this.renderPartner(artwork)}
        </div>
      </div>
    );
  }
};
export default DisplayArtwork;

const styles = {
  color: '#666',
  fontSize: 15,
  lineHeight: 1.25,
  whiteSpace: 'initial',
  fontFamily: "'Adobe Garamond W08', 'adobe-garamond-pro', 'AGaramondPro-Regular', 'Times New Roman', 'Times', 'serif'"
}