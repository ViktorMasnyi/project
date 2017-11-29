import React from 'react';
import Gallery from "../gallery/Gallery";
import MyMapComponent from "../contacts/MyMapComponent"

let googlemapkey="AIzaSyCZ1mb117y5IUWlYqHRpajl6bxhrCQeuGI";

let urls=[
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

const Contacts = () => (
  <div className="contacts">
    this is the Contact component
    <Gallery imageUrls={urls}/>
    <MyMapComponent
      isMarkerShown
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCZ1mb117y5IUWlYqHRpajl6bxhrCQeuGI&v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  </div>
);

export default Contacts;
