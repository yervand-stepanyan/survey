import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  surveyTitle: {
    padding: theme.customSpacing.large,
    textAlign: 'center'
  },
  noAnswerContainer: {
    marginBottom: theme.customSpacing.base,
    width: 400,
    margin: 'auto',
    backgroundColor: '#20ba6675',
    textAlign: 'center',
    padding: `${theme.customSpacing.small} ${theme.customSpacing.base}`
  }
}));
