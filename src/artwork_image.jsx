import React, { Component } from 'react';

class ImageCollectionDisplayArtworkImage extends Component {
  formatArtistNames(artwork) {
    if (this.props.artwork.artists != null ? this.props.artwork.artists[0] : undefined) {
      let names = this.props.artwork.artists.map(artist => artist.name);
      return names.join(', ');
    } else {
      return (this.props.artwork.artist != null ? this.props.artwork.artist.name : undefined);
    }
  }
  renderPartner(artwork) {
    if (artwork.partner.name) {
      return <p>{this.props.artwork.partner.name}</p>
    }
  }
  renderTitle(artwork) {
    if (artwork.partner.title) {
      return <span className='title'>{this.props.artwork.title}</span>
    }
  }
  renderDate(artwork) {
    if (artwork.partner.date) {
      return <span className='date'>{this.props.artwork.date}</span>
    }
  }
  render() {
    return (
      <div>
        <img
          src={this.props.artwork.image}
          className='esic-artwork' />
        <div className='esic-caption'>
          <p><strong>{this.formatArtistNames(this.props.artwork)}</strong></p>
          <p>
            {this.renderTitle(this.props.artwork)}
            {this.renderDate(this.props.artwork)}
          </p>
          {this.renderPartner(this.props.artwork)}
        </div>
      </div>
    );
  }
};
export default ImageCollectionDisplayArtworkImage;