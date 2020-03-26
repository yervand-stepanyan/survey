import React from "react";
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import PropTypes from "prop-types";

function MapBlock (props) {
  const { classes, google } = props;
  const style = {
    width: "600px",
    height: "500px",
    }
  return (
    <div>
      <Map 
        google={google} 
        zoom={20}
        initialCenter={{
        lat: 40.200451,
        lng: 44.491296}}
        style={style}
      >
        <Marker position={{ lat: 40.200451, lng: 44.491296}} />

      </Map>

    </div>
  )
}

MapBlock.propTypes = {
  classes: PropTypes.object.isRequired,
  google: PropTypes.object.isRequired
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBUNE5LteRpA0HS8_0AZTYD6RabO_Ze3AM')
 })(MapBlock);



