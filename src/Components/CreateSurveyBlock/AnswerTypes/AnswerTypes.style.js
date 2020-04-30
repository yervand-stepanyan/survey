import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  answerTypesContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: `${theme.customSpacing.small}`
  },
  answerTypesTitleWrapper: {
    display: 'flex',
    justifyContent: 'center'
  }
}));
