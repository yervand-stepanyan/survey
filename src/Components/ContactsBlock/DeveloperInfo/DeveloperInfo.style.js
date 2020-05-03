import { makeStyles } from '@material-ui/core/styles';
import { CONTACT_ICONS_COLORS } from '../../../Globals/variables';

export const useStyles = makeStyles(theme => ({
  developerInfo: {
    marginBottom: theme.customSpacing.base,
    padding: `${theme.customSpacing.small}`,
  },
  socialWrapper: {
    marginLeft: theme.customSpacing.xLarge,
    '@media screen and (max-width:600px)': {
      marginLeft: 0
    }
  },
  socialSection: {
    '& .MuiListItem-gutters': {
      alignItems: 'start',
      padding: 0,
      '& .MuiListItemIcon-root': {
        minWidth: 30
      }
    }
  },
  developersName: {
    paddingLeft: `${theme.customSpacing.small}`
  },
  link: {
    color: `${theme.customTypography.fontColor.base}`,
    display: 'flex',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  emailIcon: {
    color: CONTACT_ICONS_COLORS.emailIcon,
  },
  phoneIcon: {
    color: CONTACT_ICONS_COLORS.phoneIcon,
  },

  githubIcon: {
    color: CONTACT_ICONS_COLORS.githubIcon
  },  
  linkedinIcon: {
    color: CONTACT_ICONS_COLORS.linkedinIcon,
  },
}));
