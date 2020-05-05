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
  emailIcon: {
    color: `${theme.color.emailIcon}`
  },
  locationIcon: {
    color: `${theme.color.locationIcon}`
  },
  phoneIcon: {
    color: `${theme.color.phoneIcon}`
  }
}));
