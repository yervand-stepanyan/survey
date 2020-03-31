import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: `${theme.color.mainColorDarkBlue}`
  },
  menu: {
    display: 'flex',
    marginLeft: 'auto'
  },
  menuItem: {
    border: '1px solid transparent',
    color: 'white',
    minWidth: '100px',
    padding: `${theme.customSpacing.small} ${theme.customSpacing.base}`,
    textAlign: 'center',
    textDecoration: 'none',
    '&:hover': {
      border: `1px solid ${theme.color.mainColorGreen}`,
      borderRadius: `${theme.borders.borderRadius.base}`,
      color: `${theme.color.mainColorGreen}`
    }
  },
  menuItemLogin: {
    textDecoration: 'none'
  },
  logInButton: {
    backgroundColor: `${theme.color.mainColorGreen}`,
    borderColor: `${theme.color.mainColorDarkBlue}`,
    color: 'white',
    marginLeft: `${theme.customSpacing.base}`,
    textDecoration: 'none',
    '&:hover': {
      background: 'white',
      borderColor: `${theme.color.mainColorDarkBlue}`,
      color: `${theme.color.mainColorGreen}`
    }
  }
}));
