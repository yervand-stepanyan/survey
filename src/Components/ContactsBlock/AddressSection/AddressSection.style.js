import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  addressSection: {
    display: 'flex',
    flexDirection: 'column',
    padding: `${theme.customSpacing.small}`,
    '& .MuiList-root': {
      '& .MuiListItem-gutters': {
        padding: 0,
        '& .MuiListItemIcon-root': {
          minWidth: 30
        }
      }
    }
  },
  address: {
    display: 'flex'
  },
  email: {
    display: 'flex'
  },
  phone: {
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
