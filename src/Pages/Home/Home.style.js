import GLOBAL_STYLES from '../../Theme/GlobalStyles';

export const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '78%',
    marginTop: `${GLOBAL_STYLES.spacing.xxLarge}`,
    padding: `0 ${GLOBAL_STYLES.spacing.base}`
  },
  homeAndAdsWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '80%'
  }
};
