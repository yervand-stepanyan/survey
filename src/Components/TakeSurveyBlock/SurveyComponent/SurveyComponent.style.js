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
    borderRadius: `${theme.borders.borderRadius.base}`
  },
  takeAndResultsCellsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
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
    whiteSpace: 'nowrap'
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
