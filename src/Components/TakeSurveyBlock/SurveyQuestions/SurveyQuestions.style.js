import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(
  theme => ({
    surveyQuestionsContainer: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      minWidth: '300px',
      maxWidth: '800px',
      width: '90vw'
    },
    titleContainer: {
      display: 'flex',
      justifyContent: 'center',
      padding: `${theme.customSpacing.base} ${theme.customSpacing.large}`,
      '& h3': {
        textAlign: 'center'
      }
    },
    button: {
      backgroundColor: `${theme.color.mainColorGreen}`,
      color: `${theme.color.simpleWhite}`,
      '&:hover': {
        background: `${theme.color.buttonHoverColorGreen}`
      },
      '&$disabled': {
        cursor: 'not-allowed',
        pointerEvents: 'all'
      }
    },
    buttonWrapper: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: `${theme.customSpacing.base}`,
      position: 'relative'
    },
    disabled: {}
  }),
  { name: 'MuiButton' }
);
