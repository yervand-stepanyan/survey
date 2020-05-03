import { makeStyles } from '@material-ui/core/styles';

import { CONTACT_ICONS_COLORS } from '../../../Globals/variables'
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
    color: CONTACT_ICONS_COLORS.emailIcon
  },
  locationIcon: {
    color: CONTACT_ICONS_COLORS.locationIcon,
  },
  phoneIcon: {
    color: CONTACT_ICONS_COLORS.phoneIcon
  }
}));
