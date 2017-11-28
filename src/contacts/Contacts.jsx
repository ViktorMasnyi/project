import React from 'react';
import Gallery from "../gallery/Gallery";

let urls = [
  '../gallery/img/1.JPG',
  '../gallery/img/2.JPG',
  '../gallery/img/3.JPG'
];

const Contacts = () => (
  <div className="contacts">
    this is the Contact component
    <Gallery imageUrls={urls}/>
  </div>
);

export default Contacts;
