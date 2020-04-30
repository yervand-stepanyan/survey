import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
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
    backgroundColor: `${theme.color.simpleWhite}`,
    borderColor: `${theme.color.mainColorGreen}`,
    borderRadius: `${theme.borders.borderRadius.large}`,
    color: `${theme.color.mainColorDarkBlue}`,
    marginLeft: `${theme.customSpacing.base}`,
    textDecoration: 'none',
    '&:hover': {
      background: `${theme.color.mainColorGreen}`,
      borderColor: `${theme.color.buttonHoverColorGreen}`,
      color: `${theme.color.simpleWhite}`
    }
  }
}));
