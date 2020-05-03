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
    color: '21BA67'
  },
  locationIcon: {
    color: '#EA4335',
  },
  phoneIcon: {
    color: '#1976D2'
  }
}));
