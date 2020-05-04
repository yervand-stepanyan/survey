import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  optionsContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  contentWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: `${theme.customSpacing.large}`,
    paddingLeft: '48px'
  },
  contentSection: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    '@media only screen and (min-width: 600px)': {
      width: '70%'
    },
    '@media only screen and (min-width: 768px)': {
      width: '60%'
    }
  },
  titleWrapper: {
    display: 'flex',
    justifyContent: 'center'
  },
  textFieldSection: {
    display: 'flex',
    position: 'relative',
    width: '100%'
  },
  textFieldAndIconWrapper: {
    display: 'flex',
    width: '100%'
  },
  inputField: {
    '& .MuiOutlinedInput-input': {
      padding: '20px 73px 20px 14px'
    }
  },
  sendIconWrapper: {
    position: 'absolute',
    top: 0,
    right: 0
  },
  iconContainer: {
    display: 'flex',
    height: '59px'
  },
  chipsWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: `${theme.customSpacing.large}`
  },
  chipsRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    border: `2px solid ${theme.color.mainColorGreen}`,
    borderRadius: `${theme.borders.borderRadius.base}`,
    boxSizing: 'border-box',
    height: '114px',
    overflowY: 'auto',
    padding: `${theme.customSpacing.small}`,
    width: '100%'
  },
  chip: {
    margin: `${theme.customSpacing.small}`,
    maxWidth: '47%'
  },
  checkboxWrapper: {
    display: 'flex',
    justifyContent: 'center'
  },
  checkboxSection: {
    width: '100%'
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
