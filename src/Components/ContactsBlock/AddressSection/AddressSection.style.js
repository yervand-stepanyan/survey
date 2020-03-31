import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  addressSection: {
    display: 'flex',
    flexDirection: 'column',
    padding: `${theme.customSpacing.small}`
  },
  address: {
    display: 'flex'
  },
  phone: {
    display: 'flex'
  },
  email: {
    display: 'flex'
  },
  iconContainer: {
    marginRight: `${theme.customSpacing.small}`
  },
  icon: {
    height: '20px',
    width: '20px'
  }
}));
