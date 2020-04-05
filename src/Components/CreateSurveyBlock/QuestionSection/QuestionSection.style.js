import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  questionSectionContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: `${theme.customSpacing.small}`
  },
  questionSection: {
    height: '114px'
  },
  answerTypesWrapper: {
    marginTop: `${theme.customSpacing.small}`
  }
}));
