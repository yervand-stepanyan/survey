import GLOBAL_STYLES from '../../Theme/GlobalStyles';

export const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    marginTop: `${GLOBAL_STYLES.spacing.xxLarge}`,
    padding: `${GLOBAL_STYLES.spacing.small}`,
    width: '100%'
  },
  titleWrapper: {
    display: 'flex',
    justifyContent: 'center'
  },
  sliderContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: `${GLOBAL_STYLES.spacing.xLarge}`,
    padding: `${GLOBAL_STYLES.spacing.small}`
  },
  sliderWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%'
  },
  partnerImage: {
    height: '100px',
    width: '100px'
  }
};
