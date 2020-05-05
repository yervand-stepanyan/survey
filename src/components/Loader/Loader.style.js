import { makeStyles } from '@material-ui/core/styles';

import { LOADER_COLOR } from '../../globals/constants';

export const useStyles = makeStyles(theme => ({
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  },
  fabProgress: {
    position: 'absolute',
    top: 12,
    left: 12,
    zIndex: 1
  },
  pageLoaderContainer: {
    textAlign: 'center',
    marginTop: '30vh',
    minHeight: 200
  },
  [LOADER_COLOR.green]: {
    color: `${theme.color.buttonHoverColorGreen}`
  },
  [LOADER_COLOR.red]: {
    color: `${theme.color.redButton}`
  },
  [LOADER_COLOR.yellow]: {
    color: `${theme.color.yellowButton}`
  }
}));
