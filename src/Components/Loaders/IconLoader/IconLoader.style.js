import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  fabProgress: {
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1
  },
  blue: {
    color: '#3F51B5'
  },
  green: {
    color: `${theme.color.buttonHoverColorGreen}`
  },
  pink: {
    color: '#F50057'
  }
}));
