import GLOBAL_STYLES from '../../../Theme/GlobalStyles';

export const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: `${GLOBAL_STYLES.borders.borderRadius.base}`,
    boxShadow: `${GLOBAL_STYLES.boxShadow.base}`,
    boxSizing: 'border-box',
    height: '100%',
    padding: `${GLOBAL_STYLES.spacing.small}`
  },
  blockTitleWrapper: {
    display: 'flex',
    justifyContent: 'center'
  },
  createSurveyWrapper: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: `${GLOBAL_STYLES.spacing.xLarge}`,
    padding: `${GLOBAL_STYLES.spacing.small}`
  }
};