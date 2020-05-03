import { makeStyles } from '@material-ui/core/styles';

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
