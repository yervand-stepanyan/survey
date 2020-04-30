import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: `${theme.color.mainColorDarkBlue}`,
    display: 'flex',
    flexDirection: 'column',
    marginTop: `${theme.customSpacing.xxxLarge}`,
    padding: `${theme.customSpacing.large} ${theme.customSpacing.base}`,
    position: 'relative',
    bottom: 0,
    right: 0
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
      borderRadius: `${theme.borders.borderRadius.large}`,
      color: `${theme.color.mainColorGreen}`
    }
  },
  infoWrapper: {
    color: 'white',
    marginTop: `${theme.customSpacing.xxLarge}`,
    display: 'flex',
    justifyContent: 'center'
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
    justifyContent: 'center'
  },
  line: {
    width: '2px',
    background: `${theme.color.simpleWhite}`,
    margin: '0px 20px'
  }
}));
