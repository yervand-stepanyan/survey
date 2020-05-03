import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  developerInfo: {
    padding: `${theme.customSpacing.small}`,
    marginBottom: theme.customSpacing.base,
  },
  socialWrapper: {
    marginLeft: theme.customSpacing.xLarge,
  },
  socialSection: {
    '& .MuiListItem-gutters': {
      padding: 0,
      alignItems: 'start',
      '& .MuiListItemIcon-root': {
        minWidth: 30
      }
    }
  },
  developersName: {
    paddingLeft: `${theme.customSpacing.small}`
  },
  link: {
    display: 'flex',
    color: `${theme.customTypography.fontColor.base}`,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  emailIcon: {
    color: '#41C47C'
  },
  phoneIcon: {
    color: '#1976D2'
  },

  githubIcon: {
    color: '#000000'
  },  
  linkedinIcon: {
    color: '#0077B5',
  },
}));
