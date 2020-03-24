import GLOBAL_STYLES from '../../Theme/GlobalStyles';

export const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: `${GLOBAL_STYLES.borders.borderRadius.base}`,
    boxShadow: `${GLOBAL_STYLES.boxShadow.base}`,
    boxSizing: 'border-box',
    padding: `${GLOBAL_STYLES.spacing.small}`,
    width: '75%'
  }
};
