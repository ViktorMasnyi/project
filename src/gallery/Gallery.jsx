import React from 'react';
 
class Gallery extends React.Component {
  // implementation will go here 
    renderImage(imageUrl) {
    return (
      <div>
        <img src={imageUrl} alt="gallery image" />
      </div>
    );
  }
 
  render() {
    return (
      <div className="gallery">
        <div className="images">
          {this.props.imageUrls.map(imageUrl => this.renderImage(imageUrl))}
        </div>
      </div>
    );
  }
}

export default Gallery;
