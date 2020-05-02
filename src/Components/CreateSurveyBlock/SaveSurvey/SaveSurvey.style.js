import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  saveSurveyContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: `${theme.customSpacing.xLarge}`
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative'
  },
  button: {
    backgroundColor: `${theme.color.mainColorGreen}`,
    color: 'white',
    '&:hover': {
      backgroundColor: `${theme.color.buttonHoverColorGreen}`
    }
  }
}));
