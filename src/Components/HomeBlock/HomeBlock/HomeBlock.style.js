import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
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
