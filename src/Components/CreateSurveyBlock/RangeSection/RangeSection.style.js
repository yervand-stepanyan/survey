import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  rangeSectionContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  titleWrapper: {
    display: 'flex',
    justifyContent: 'center'
  },
  inputWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    boxSizing: 'border-box',
    height: '240px',
    marginTop: `${theme.customSpacing.large}`
  },
  textFieldsSection: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  textFieldWrapper: {
    width: '30%'
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: `${theme.customSpacing.large}`
  },
  button: {
    backgroundColor: `${theme.color.mainColorGreen}`,
    color: 'white',
    '&:hover': {
      backgroundColor: `${theme.color.buttonHoverColorGreen}`
    }
  }
}));
