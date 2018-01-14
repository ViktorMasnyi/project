import React from 'react';

let imageUrls=[
  'img/1.jpg',
  'img/2.jpg',
  'img/3.jpg',
  'img/4.jpg',
  'img/5.jpg',
  'img/6.jpg',
  'img/7.jpg',
  'img/8.jpg',
  'img/9.jpg',
  'img/10.jpg'
];
 
class Gallery extends React.Component {
    renderImage(imageUrl, id) {
      return (
        <div className="gallery__imagecontainer" key={id}>
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
