import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  rangeSectionContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: `${theme.customSpacing.base}`,
    paddingBottom: `${theme.customSpacing.base}`
  },
  titleWrapper: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center'
  },
  inputWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    boxSizing: 'border-box',
    marginTop: `${theme.customSpacing.large}`
  },
  textFieldsSection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    '@media only screen and (min-width: 478px)': {
      flexDirection: 'row'
    }
  },
  textFieldWrapper: {
    width: '100%',
    marginBottom: `${theme.customSpacing.base}`,
    '@media only screen and (min-width: 478px)': {
      width: '30%'
    }
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
