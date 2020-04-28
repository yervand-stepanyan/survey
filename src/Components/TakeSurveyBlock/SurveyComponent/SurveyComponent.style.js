import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  surveyComponentContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e6e6e6',
    marginBottom: `${theme.customSpacing.small}`,
    padding: `${theme.customSpacing.base} ${theme.customSpacing.xLarge}`,
    boxShadow: '0 8px 6px -6px black',
    borderRadius: `${theme.borders.borderRadius.base}`,
    '@media (max-width:823px)': {
      display: 'flex',
      flexDirection: 'column',
      padding: `${theme.customSpacing.small} ${theme.customSpacing.large}`
    },
    '@media (max-width:450px)': {
      display: 'flex',
      flexDirection: 'column',
      padding: `${theme.customSpacing.small} ${theme.customSpacing.small}`,
      marginTop: `${theme.customSpacing.small}`
    }
  },
  surveyTitleContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    '@media (max-width:823px)': {
      justifyContent: 'center'
    }
  },
  surveyTitle: {
    '@media (max-width:823px)': {
      textAlign: 'center'
    }
  },
  takeAndResultsCellsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width:450px)': {
      marginTop: '5px'
    }
  },
  menuItemButton: {
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
  },
  buttonContainer: {
    marginRight: `${theme.customSpacing.small}`,
    position: 'relative',
    whiteSpace: 'nowrap',
    '@media (max-width:450px)': {
      height: '100%',
      '& span': {
        fontSize: '10px'
      },
      '& .MuiSvgIcon-root': {
        fontSize: '1.1rem'
      }
    }
  },
  link: {
    textDecoration: 'none'
  },
  buttonProgress: {
    color: '#3F51B5',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  },
  buttonRemoveProgress: {
    color: '#F50057',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  }
}));
