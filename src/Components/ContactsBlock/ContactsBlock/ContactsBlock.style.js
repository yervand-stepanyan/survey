import GLOBAL_STYLES from '../../../Theme/GlobalStyles';

export const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: `${GLOBAL_STYLES.borders.borderRadius.base}`,
    boxShadow: `${GLOBAL_STYLES.boxShadow.base}`,
    boxSizing: 'border-box',
    padding: `${GLOBAL_STYLES.spacing.small}`
  },
  title: {
    display: 'flex',
    justifyContent: 'center'
  },
  contactsAndMapWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    marginTop: `${GLOBAL_STYLES.spacing.xLarge}`,
    padding: `${GLOBAL_STYLES.spacing.small}`
  },
  contactsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    width: '49%'
  },
  addressWrapper: {
    margin: `${GLOBAL_STYLES.spacing.xLarge} 0`,
    padding: `${GLOBAL_STYLES.spacing.small}`
  },
  mapWrapper: {
    borderRadius: `${GLOBAL_STYLES.borders.borderRadius.base}`,
    boxShadow: `${GLOBAL_STYLES.boxShadow.base}`,
    boxSizing: 'border-box',
    padding: `${GLOBAL_STYLES.spacing.small}`,
    width: '49%',
    height: '100%'
  }
};
