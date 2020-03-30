import GLOBAL_STYLES from '../../../Theme/GlobalStyles';

export const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: `${GLOBAL_STYLES.spacing.small}`
  },
  textFieldWrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  },
  titleLabel: {
    display: 'flex',
    alignItems: 'center',
    paddingRight: `${GLOBAL_STYLES.spacing.small}`
  },
  textFieldSection: {
    width: '50%'
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: `${GLOBAL_STYLES.spacing.base}`
  },
  button: {
    backgroundColor: `${GLOBAL_STYLES.color.mainColorGreen}`,
    color: 'white',
    '&:hover': {
      backgroundColor: '#11703C'
    }
  }
};
