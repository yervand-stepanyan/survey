import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: `${theme.color.mainColorDarkBlue}`,
    display: 'flex',
    flexDirection: 'column',
    marginTop: `${theme.customSpacing.xxxLarge}`,
    minWidth: '280px',
    padding: `${theme.customSpacing.large} ${theme.customSpacing.base}`
  },
  logoAndMenuWrapper: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  logoSection: {
    '@media (max-width:360px)': {
      width: '55%'
    },
    alignSelf: 'center'
  },
  logo: {
    width: '100%'
  },
  menuSection: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: `${theme.customSpacing.base}`
  },
  menu: {
    marginBottom: `${theme.customSpacing.base}`
  },
  menuItem: {
    '@media (max-width:400px)': {
      fontSize: '13px'
    },
    border: '1px solid transparent',
    color: 'white',
    padding: `${theme.customSpacing.small} ${theme.customSpacing.base}`,
    textDecoration: 'none',
    '&:hover': {
      border: `1px solid ${theme.color.mainColorGreen}`,
      borderRadius: `${theme.borders.borderRadius.base}`,
      color: `${theme.color.mainColorGreen}`
    }
  },
  infoWrapper: {
    color: 'white',
    marginTop: `${theme.customSpacing.xxLarge}`
  },
  infoSection: {
    '@media (max-width: 550px)': {
      flexDirection: 'column-reverse',
      alignItems: 'center',
      fontSize: '14px'
    },
    '@media (max-width: 400px)': {
      flexDirection: 'column-reverse',
      alignItems: 'center',
      fontSize: '12px'
    },
    display: 'flex',
    justifyContent: 'center',
    position: 'relative'
  },
  websiteCreator: {
    '@media (max-width: 550px)': {
      position: 'relative'
    },
    position: 'absolute',
    right: 0
  }
}));
