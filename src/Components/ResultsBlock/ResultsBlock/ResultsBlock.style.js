import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  surveyTitle: {
    padding: theme.customSpacing.xLarge,
    textAlign: 'center'
  },
  noSurveyAnswer: {
    marginBottom: theme.customSpacing.base,
    width: 400,
    margin: 'auto',
    backgroundColor: ''
  }
}));
