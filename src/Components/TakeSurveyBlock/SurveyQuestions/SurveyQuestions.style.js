import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(
  theme => ({
    titleContainer: {
      padding: `${theme.customSpacing.large}`,
      textAlign: 'center'
      
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
      textAlign: 'center',
      marginTop: `${theme.customSpacing.large}`,
    },
    disabled: {}
  }),
  { name: 'MuiButton' }
);
