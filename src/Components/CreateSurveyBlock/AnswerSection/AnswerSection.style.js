import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  answerSectionContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: `${theme.customSpacing.large}`
  }
}));
