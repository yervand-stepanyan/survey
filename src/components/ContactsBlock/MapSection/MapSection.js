import React from 'react';
import { Map, Marker } from 'google-maps-react';
import PropTypes from 'prop-types';

import { MAP_DETAILS } from '../../../globals/constants';
import { useStyles } from './MapSection.style';

function MapSection({ google }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Map
        google={google}
        initialCenter={MAP_DETAILS.initialCenter}
        zoom={MAP_DETAILS.zoom}
      >
        <Marker
          position={MAP_DETAILS.initialCenter}
          title={MAP_DETAILS.markerTitle}
        />
      </Map>
    </div>
  );
}

MapSection.propTypes = {
  google: PropTypes.object.isRequired
};

export default MapSection;
