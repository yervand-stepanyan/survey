import React from 'react';
import { Map, Marker } from 'google-maps-react';
import PropTypes from 'prop-types';

const INITIAL_CENTER = {
  lat: 40.198929,
  lng: 44.490734
};
const ZOOM = 15;
const MARKER_TITLE = 'ACA';

function MapSection({ classes, google }) {
  return (
    <div className={classes.container}>
      <Map google={google} zoom={ZOOM} initialCenter={INITIAL_CENTER}>
        <Marker position={INITIAL_CENTER} title={MARKER_TITLE} />
      </Map>
    </div>
  );
}

MapSection.propTypes = {
  classes: PropTypes.object.isRequired,
  google: PropTypes.object.isRequired
};

export default MapSection;
