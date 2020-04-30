import { makeStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const noAnswerColor = red[900];

export const useStyles = makeStyles(theme => ({
  surveyTitle: {
    padding: theme.customSpacing.xLarge,
    textAlign: 'center'
  },
  noAnswerContainer: {
    marginBottom: theme.customSpacing.base,
    width: 400,
    margin: 'auto',
    backgroundColor: '#20ba6675',
    textAlign: 'center',
    padding: `${theme.customSpacing.small} ${theme.customSpacing.base}`
  },
  noAnswerCard: {
    color: noAnswerColor,
    textAlign: 'center',
    padding: theme.customSpacing.xxxLarge
  }
}));
