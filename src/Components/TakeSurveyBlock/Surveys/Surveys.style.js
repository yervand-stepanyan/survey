import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  surveysContainer: {
    borderRadius: `${theme.borders.borderRadius.base}`,
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    maxWidth: '90vw',
    width: '640px'
  },
  singleSurveyContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e6e6e6',
    marginBottom: `${theme.customSpacing.small}`,
    padding: `${theme.customSpacing.base} ${theme.customSpacing.xLarge}`,
    boxShadow: '0 8px 6px -6px black'
  },
  takeAndResultsCellsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    marginRight: `${theme.customSpacing.small}`
  },
  link: {
    textDecoration: 'none'
  }
}));
