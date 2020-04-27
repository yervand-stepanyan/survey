import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    minWidth: '320px',
    backgroundColor: `${theme.color.simpleWhite}`,
    boxShadow: ' 0 2px 4px -1px rgba(0,0,0,0.25)'
  },
  logo: {
    '@media (max-width:400px)': {
      width: '150px'
    },
    '@media (max-width:350px)': {
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
    '@media (max-width:400px)': {
      fontSize: '13px'
    },
    '@media (max-width:380px)': {
      fontSize: '12px'
    },
    '@media (max-width:350px)': {
      fontSize: '11px'
    },
    backgroundColor: `${theme.color.mainColorGreen}`,
    borderColor: `${theme.color.mainColorDarkBlue}`,
    color: `${theme.color.simpleWhite}`,
    marginLeft: `${theme.customSpacing.base}`,
    textDecoration: 'none',
    '&:hover': {
      background: `${theme.color.buttonHoverColorGreen}`,
      borderColor: `${theme.color.buttonHoverColorGreen}`,
      color: `${theme.color.simpleWhite}`
    }
  }
}));
