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
    marginRight: `${theme.customSpacing.small}`,
    position: 'relative'
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
