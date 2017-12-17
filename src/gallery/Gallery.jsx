import React from 'react';

let imageUrls=[
  'img/1.JPG',
  'img/2.JPG',
  'img/3.JPG',
  'img/4.JPG',
  'img/5.JPG',
  'img/1.JPG',
  'img/2.JPG',
  'img/3.JPG',
  'img/4.JPG',
  'img/5.JPG'
];
 
class Gallery extends React.Component {
    renderImage(imageUrl, id) {
      return (
        <div key={id}>
          <img className="gallery__image" src={imageUrl} alt="gallery" />
        </div>
    );
  }
 
  render() {
    return (
      <main className="main">
        <div className="gallery">
          {imageUrls.map((imageUrl, id) => this.renderImage(imageUrl, id))}
        </div>
      </main>
    );
  }
}

export default Gallery;
