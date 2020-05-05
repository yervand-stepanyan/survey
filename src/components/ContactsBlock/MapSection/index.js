import { GoogleApiWrapper } from 'google-maps-react';

import MapSection from './MapSection';

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(MapSection);
