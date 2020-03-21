import GLOBAL_STYLES from '../../Theme/GlobalStyle';

export const styles = {
  container: {
    padding: `0 ${GLOBAL_STYLES.defaultPadding}`,
    marginTop: `${GLOBAL_STYLES.defaultMargin}`,
    height: '78%',
    display: 'flex',
    flexDirection: 'column'
  },
  homeAndAdsWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '80%'
  }
};
