import GLOBAL_STYLES from '../../Theme/GlobalStyles';

export const styles = {
  container: {
    backgroundColor: `${GLOBAL_STYLES.color.mainColorDarkBlue}`,
    color: 'white',
    position: 'relative',
    left: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    marginTop: `${GLOBAL_STYLES.spacing.xLarge}`,
    padding: `${GLOBAL_STYLES.spacing.base}`,
    textTransform: 'capitalize'
  },
  footerTopPart: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  footerLogo: {
    cursor: 'pointer'
  },
  menuItemContainer: {
    marginTop: `${GLOBAL_STYLES.spacing.large}`
  },
  menuItem: {
    border: '1px solid transparent',
    color: 'white',
    minWidth: 100,
    padding: `${GLOBAL_STYLES.spacing.small} ${GLOBAL_STYLES.spacing.base}`,
    textAlign: 'center',
    textDecoration: 'none',
    '&:hover': {
      border: `1px solid ${GLOBAL_STYLES.color.mainColorGreen}`,
      borderRadius: `${GLOBAL_STYLES.borders.borderRadius.base}`,
      color: `${GLOBAL_STYLES.color.mainColorGreen}`
    }
  },
  footerBottomPart: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: `${GLOBAL_STYLES.spacing.xxLarge}`
  },
  footerBottom: {
    width: '55%',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '10px'
  },
  madeBy: {
    paddingRight: `${GLOBAL_STYLES.spacing.base}`
  }
};
