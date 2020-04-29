import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  homeBlockContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: `${theme.borders.borderRadius.base}`,
    boxSizing: 'border-box',
  },
  noSurveysContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  surveyHeading: {
    textAlign: 'center',
    padding: theme.customSpacing.large
  }
}));
