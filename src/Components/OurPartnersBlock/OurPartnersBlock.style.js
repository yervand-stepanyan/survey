import GLOBAL_STYLES from '../../Theme/GlobalStyles';

export const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: `${GLOBAL_STYLES.borders.borderRadius.base}`,
    boxShadow: `${GLOBAL_STYLES.boxShadow.base}`,
    boxSizing: 'border-box',
    minHeight: '20%',
    marginTop: `${GLOBAL_STYLES.spacing.base}`,
    padding: `${GLOBAL_STYLES.spacing.small}`,
    width: '100%'
  },
  titleWrapper: {
    display: 'flex',
    justifyContent: 'center'
  },
  sliderWrapper: {
    display: 'flex',
    flexDirection: 'row'
  },
  partnerImage: {
    width: '150px',
    height: '150px'
  }
};
