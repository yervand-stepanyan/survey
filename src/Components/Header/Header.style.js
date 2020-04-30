import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: `${theme.color.simpleWhite}`,
    boxShadow: ' 0 2px 4px -1px rgba(0,0,0,0.25)'
  },
  logo: {
    '@media only screen and (max-width:400px)': {
      width: '150px'
    },
    '@media only screen and (max-width:350px)': {
      width: '130px'
    }
  },
  menu: {
    display: 'flex',
    marginLeft: 'auto'
  },
  menuItem: {
    textDecoration: 'none'
  },
  menuItemButton: {
    '@media only screen and (max-width:400px)': {
      fontSize: '13px'
    },
    '@media only screen and (max-width:380px)': {
      fontSize: '12px'
    },
    '@media only screen and (max-width:350px)': {
      fontSize: '11px'
    },
    backgroundColor: `${theme.color.simpleWhite}`,
    border: `1px solid ${theme.color.mainColorGreen}`,
    borderRadius: `${theme.borders.borderRadius.large}`,
    color: `${theme.color.mainColorGreen}`,
    marginLeft: `${theme.customSpacing.base}`,
    boxShadow: 'unset',
    textDecoration: 'none',
    '&:hover': {
      background: `${theme.color.mainColorGreen}`,
      color: `${theme.color.simpleWhite}`
    }
  }
}));
