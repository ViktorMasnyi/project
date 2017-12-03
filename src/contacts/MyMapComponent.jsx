import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: 50.428523, lng: 30.476130 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 50.428523, lng: 30.476130 }} />}
  </GoogleMap>
))

export default MyMapComponent;
