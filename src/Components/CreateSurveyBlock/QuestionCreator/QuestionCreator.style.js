import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: `0 ${theme.customSpacing.small}`
  },
  textFieldWrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  },
  titleLabel: {
    display: 'flex',
    alignItems: 'center',
    paddingRight: `${theme.customSpacing.small}`
  },
  textFieldSection: {
    width: '50%'
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: `${theme.customSpacing.base}`
  },
  button: {
    backgroundColor: `${theme.color.mainColorGreen}`,
    color: 'white',
    '&:hover': {
      backgroundColor: `${theme.color.buttonHoverColorGreen}`
    }
  }
}));
