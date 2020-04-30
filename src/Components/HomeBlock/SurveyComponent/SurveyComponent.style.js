import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  card: {
    marginBottom: theme.customSpacing.base
  },
  surveyComponentContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${theme.customSpacing.base} ${theme.customSpacing.base}  ${theme.customSpacing.base} ${theme.customSpacing.xLarge}`,
    borderRadius: `${theme.borders.borderRadius.small}`,
    '@media (max-width:768px)': {
      display: 'flex',
      flexDirection: 'column',
      padding: `${theme.customSpacing.small} ${theme.customSpacing.large}`
    },
  },
  surveyTitleContainer: {
    display: 'flex',
    color: '#606060',
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
    marginLeft: theme.customSpacing.small,
    borderLeft: '1px solid #e4dddd',
    paddingLeft: theme.customSpacing.midLarge,    

    alignItems: 'center',
    '@media (max-width:768px)': {
      marginTop: theme.customSpacing.small,
      borderLeft: 'none',
      paddingLeft: 0,      
    }
  },
  menuItemButton: {
    backgroundColor: theme.color.mainColorGreen,
    borderColor: theme.color.mainColorDarkBlue,
    color: theme.color.simpleWhite,
    marginLeft: theme.customSpacing.base,
    textDecoration: 'none',
    '&:hover': {
      background: theme.color.buttonHoverColorGreen,
      borderColor: theme.color.buttonHoverColorGreen,
      color: theme.color.simpleWhite
    }
  },
  buttonContainer: {
    marginRight: theme.customSpacing.small,
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
  resultsButton: {
    color: theme.color.mainColorGreen
  }
}));
