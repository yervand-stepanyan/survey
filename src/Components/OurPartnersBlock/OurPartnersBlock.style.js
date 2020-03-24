import GLOBAL_STYLES from '../../Theme/GlobalStyles';

export const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: `${GLOBAL_STYLES.borders.borderRadius.base}`,
    boxShadow: `${GLOBAL_STYLES.boxShadow.base}`,
    boxSizing: 'border-box',
    marginTop: `${GLOBAL_STYLES.spacing.base}`,
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
