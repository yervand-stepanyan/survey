import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  developerInfo: {
    padding: `${theme.customSpacing.small}`
  },
  socialWrapper: {
    marginLeft: `${theme.customSpacing.xxLarge}`
  },
  socialSection: {
    display: 'flex'
  },
  iconContainer: {
    marginRight: `${theme.customSpacing.small}`
  },
  icon: {
    height: '20px',
    width: '20px'
  },
  link: {
    display: 'flex',
    color: `${theme.customTypography.fontColor.base}`,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
}));
