import React from 'react';
import { Map, Marker } from 'google-maps-react';
import PropTypes from 'prop-types';

function MapBlock(props) {
  const { classes, google } = props;

  return (
    <div className={classes.container}>
      <Map
        className={classes.map}
        google={google}
        zoom={15}
        initialCenter={{
          lat: 40.200451,
          lng: 44.491296
        }}
      >
        <Marker position={{ lat: 40.200451, lng: 44.491296 }} />
      </Map>
    </div>
  );
}

MapBlock.propTypes = {
  classes: PropTypes.object.isRequired,
  google: PropTypes.object.isRequired
};

export default MapBlock;
