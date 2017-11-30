import React from 'react';
 
class Gallery extends React.Component {
  // implementation will go here 
    renderImage(imageUrl) {
    return (
      <div>
        <img className="gallery__image" src={imageUrl} alt="gallery image" />
      </div>
    );
  }
 
  render() {
    return (
      <div className="gallery">
        {this.props.imageUrls.map(imageUrl => this.renderImage(imageUrl))}
      </div>
    );
  }
}

export default Gallery;
