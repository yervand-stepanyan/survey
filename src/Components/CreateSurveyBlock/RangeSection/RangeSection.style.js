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
    paddingLeft: '48px',
    '@media only screen and (min-width: 600px)': {
      flexDirection: 'row'
    }
  },
  textFieldWrapper: {
    display: 'flex',
    width: '100%',
    marginBottom: `${theme.customSpacing.base}`,
    '@media only screen and (min-width: 600px)': {
      width: '30%'
    }
  },
  iconWrapper: {
    display: 'flex'
  },
  helpIcon: {
    color: `${theme.color.yellowButton}`
  },
  helpIconArrow: {
    color: `${theme.color.yellowButton}`,
    fontSize: '10px'
  },
  helpIconTooltip: {
    backgroundColor: `${theme.color.yellowButton}`,
    fontSize: '14px'
  },
  errorIcon: {
    color: `${theme.color.redButton}`
  },
  errorIconArrow: {
    color: `${theme.color.redButton}`,
    fontSize: '10px'
  },
  errorIconTooltip: {
    backgroundColor: `${theme.color.redButton}`,
    fontSize: '14px'
  },
  checkIconWrapper: {
    display: 'flex',
    width: '48px',
    marginTop: '16px'
  },
  checkIconContainer: {
    margin: '0 auto'
  },
  checkIcon: {
    color: `${theme.color.mainColorGreen}`
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
