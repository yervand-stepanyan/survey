import GLOBAL_STYLES from '../../Theme/GlobalStyles';

export const styles = {
  container: {
    backgroundColor: `${GLOBAL_STYLES.color.mainColorDarkBlue}`,
    display: 'flex',
    flexDirection: 'column',
    marginTop: `${GLOBAL_STYLES.spacing.xxxLarge}`,
    padding: `${GLOBAL_STYLES.spacing.large} ${GLOBAL_STYLES.spacing.base}`
  },
  logoAndMenuWrapper: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  logoSection: {
    alignSelf: 'center'
  },
  menuSection: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: `${GLOBAL_STYLES.spacing.base}`
  },
  menu: {
    marginBottom: `${GLOBAL_STYLES.spacing.base}`
  },
  menuItem: {
    border: '1px solid transparent',
    color: 'white',
    padding: `${GLOBAL_STYLES.spacing.small} ${GLOBAL_STYLES.spacing.base}`,
    textDecoration: 'none',
    '&:hover': {
      border: `1px solid ${GLOBAL_STYLES.color.mainColorGreen}`,
      borderRadius: `${GLOBAL_STYLES.borders.borderRadius.base}`,
      color: `${GLOBAL_STYLES.color.mainColorGreen}`
    }
  },
  infoWrapper: {
    color: 'white',
    marginTop: `${GLOBAL_STYLES.spacing.xxLarge}`
  },
  infoSection: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative'
  },
  websiteCreator: {
    position: 'absolute',
    right: 0
  }
};
