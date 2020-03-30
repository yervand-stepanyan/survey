import GLOBAL_STYLES from '../../../Theme/GlobalStyles';

export const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  questionWrapper: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    width: '100%'
  },
  questionLabel: {
    display: 'flex',
    padding: `0 ${GLOBAL_STYLES.spacing.xxLarge}`
  },
  editIcon: {
    position: 'absolute',
    right: 0
  }
};
