import GLOBAL_STYLES from '../../../Theme/GlobalStyles';

export const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: 'inherit'
  },
  questionWrapper: {
    display: 'flex',
    justifyContent: 'center',
    height: 'inherit',
    position: 'relative',
    width: '100%'
  },
  questionLabel: {
    display: 'flex',
    padding: `0 ${GLOBAL_STYLES.spacing.xxLarge}`
  },
  label: {
    whiteSpace: 'nowrap'
  },
  question: {
    color: `${GLOBAL_STYLES.color.mainColorGreen}`,
    height: 'inherit',
    marginLeft: `${GLOBAL_STYLES.spacing.base}`,
    overflowY: 'auto'
  },
  editIcon: {
    position: 'absolute',
    right: 0
  }
};
