import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  titleContainer: {
    color: theme.color.mainColorDarkBlue,
    padding: `${theme.customSpacing.large}`,
    textAlign: 'center'
  },
  button: {
    backgroundColor: `${theme.color.mainColorGreen}`,
    color: `${theme.color.simpleWhite}`,
    '&:hover': {
      background: `${theme.color.buttonHoverColorGreen}`
    }
  },
  buttonWrapper: {
    marginTop: `${theme.customSpacing.xLarge}`,
    position: 'relative',
    textAlign: 'center'
  }
}));
