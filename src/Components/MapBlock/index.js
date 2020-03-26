import { withStyles } from '@material-ui/core';
import { GoogleApiWrapper } from 'google-maps-react';

import { styles } from './MapBlock.style';
import MapBlock from './MapBlock';

// export default withStyles(styles)(MapBlock);

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBUNE5LteRpA0HS8_0AZTYD6RabO_Ze3AM')
   })(withStyles(styles)(MapBlock))
