import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
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
