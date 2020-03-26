import GLOBAL_STYLES from '../../Theme/GlobalStyles';

export const styles = {
  container: {
    backgroundColor: `${GLOBAL_STYLES.color.mainColorDarkBlue}`
  },
  menu: {
    display: 'flex',
    marginLeft: 'auto'
  },
  menuItem: {
    border: '1px solid transparent',
    color: 'white',
    minWidth: '100px',
    padding: `${GLOBAL_STYLES.spacing.small} ${GLOBAL_STYLES.spacing.base}`,
    textAlign: 'center',
    textDecoration: 'none',
    '&:hover': {
      border: `1px solid ${GLOBAL_STYLES.color.mainColorGreen}`,
      borderRadius: `${GLOBAL_STYLES.borders.borderRadius.base}`,
      color: `${GLOBAL_STYLES.color.mainColorGreen}`
    }
  },
  menuItemLogin: {
    textDecoration: 'none'
  },
  logInButton: {
    backgroundColor: `${GLOBAL_STYLES.color.mainColorGreen}`,
    borderColor: `${GLOBAL_STYLES.color.mainColorDarkBlue}`,
    color: 'white',
    marginLeft: `${GLOBAL_STYLES.spacing.base}`,
    textDecoration: 'none',
    '&:hover': {
      background: 'white',
      borderColor: `${GLOBAL_STYLES.color.mainColorDarkBlue}`,
      color: `${GLOBAL_STYLES.color.mainColorGreen}`
    }
  }
};
