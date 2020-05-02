import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(
  theme => ({
    saveSurveyContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: `${theme.customSpacing.large}`
    },
    buttonWrapper: {
      display: 'flex',
      justifyContent: 'center',
      cursor: 'not-allowed',
      marginTop: `${theme.customSpacing.base}`,
      position: 'relative'
    },
    button: {
      backgroundColor: `${theme.color.mainColorGreen}`,
      color: 'white',
      '&:hover': {
        backgroundColor: `${theme.color.buttonHoverColorGreen}`
      },
      '&$disabled': {
        pointerEvents: 'none'
      }
    },
    disabled: {}
  }),
  { name: 'MuiButton' }
);
