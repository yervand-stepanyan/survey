import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  singleSurveyContainer: {
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
