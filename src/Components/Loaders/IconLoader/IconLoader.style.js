import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  fabProgress: {
    position: 'absolute',
    top: -10,
    left: -10,
    zIndex: 1
  },
  yellow: {
    color: `${theme.color.yellowButton}`
  },
  green: {
    color: `${theme.color.buttonHoverColorGreen}`
  },
  red: {
    color: `${theme.color.redButton}`
  }
}));
