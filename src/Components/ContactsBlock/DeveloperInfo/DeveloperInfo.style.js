import GLOBAL_STYLES from '../../../Theme/GlobalStyles';

export const styles = {
  developerInfo: {
    padding: `${GLOBAL_STYLES.spacing.small}`
  },
  socialWrapper: {
    marginLeft: `${GLOBAL_STYLES.spacing.xxLarge}`
  },
  socialSection: {
    display: 'flex'
  },
  iconContainer: {
    marginRight: `${GLOBAL_STYLES.spacing.small}`
  },
  icon: {
    height: '20px',
    width: '20px'
  },
  link: {
    display: 'flex',
    color: `${GLOBAL_STYLES.typography.fontColor.base}`,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
};
