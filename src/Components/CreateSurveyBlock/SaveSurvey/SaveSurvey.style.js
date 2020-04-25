import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  saveSurveyContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: `${theme.customSpacing.large}`
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: `${theme.customSpacing.base}`,
    position: 'relative'
  },
  button: {
    backgroundColor: `${theme.color.mainColorGreen}`,
    color: 'white',
    '&:hover': {
      backgroundColor: `${theme.color.buttonHoverColorGreen}`
    }
  },
  buttonProgress: {
    color: `${theme.color.buttonHoverColorGreen}`,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  }
}));
