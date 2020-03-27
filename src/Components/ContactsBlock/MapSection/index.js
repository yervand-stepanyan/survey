import { GoogleApiWrapper } from 'google-maps-react';

import { withStyles } from '@material-ui/core';

import MapSection from './MapSection';
import { styles } from './MapSection.style';

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(withStyles(styles)(MapSection));
