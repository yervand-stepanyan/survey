import GLOBAL_STYLES from '../../Theme/GlobalStyles';

export const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: `${GLOBAL_STYLES.borders.borderRadius.base}`,
    boxShadow: `${GLOBAL_STYLES.boxShadow.base}`,
    boxSizing: 'border-box',
    padding: `${GLOBAL_STYLES.spacing.small}`,
    width: '19%'
  },
  imageWrapper: {
    width: '100%',
    height: '100%'
  },
  adImage: {
    width: 'inherit',
    height: 'inherit'
  }
};
