import React from 'react';
import { Map, Marker } from 'google-maps-react';
import PropTypes from 'prop-types';

import { MAP_DETAIL } from '../../../globals/constants';
import { useStyles } from './MapSection.style';

function MapSection({ google }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Map
        google={google}
        initialCenter={MAP_DETAIL.initialCenter}
        zoom={MAP_DETAIL.zoom}
      >
        <Marker
          position={MAP_DETAIL.initialCenter}
          title={MAP_DETAIL.markerTitle}
        />
      </Map>
    </div>
  );
}

MapSection.propTypes = {
  google: PropTypes.object.isRequired
};

export default MapSection;
