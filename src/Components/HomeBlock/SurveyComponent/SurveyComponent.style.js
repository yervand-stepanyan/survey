import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  card: {
    marginBottom: theme.customSpacing.base
  },
  surveyComponentContainer: {
    display: 'flex',
    width: '100%',
    padding: `${theme.customSpacing.base} ${theme.customSpacing.base}  ${theme.customSpacing.base} ${theme.customSpacing.xLarge}`,
    borderRadius: `${theme.borders.borderRadius.small}`,
    '@media (max-width:768px)': {
      display: 'flex',
      flexDirection: 'column',
      padding: `${theme.customSpacing.small} ${theme.customSpacing.large}`
    }
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
    alignItems: 'center',
    borderLeft: '1px solid #e4dddd',
    display: 'flex',
    justifyContent: 'center',
    marginLeft: theme.customSpacing.small,
    paddingLeft: theme.customSpacing.midLarge,
    '@media (max-width:768px)': {
      borderLeft: 'none',
      marginTop: theme.customSpacing.small,
      paddingLeft: 0
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
  
  link: {
    textDecoration: 'none'
  },
  resultsButton: {
    color: theme.color.mainColorGreen
  }
}));
