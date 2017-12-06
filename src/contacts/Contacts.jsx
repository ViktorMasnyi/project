import React from 'react';
import MyMapComponent from "./MyMapComponent";

const Contacts = () => (
  <main className="main">
    <div className="contacts">
      this is the Contact component    
      <MyMapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCZ1mb117y5IUWlYqHRpajl6bxhrCQeuGI&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  </main>
);

export default Contacts;
