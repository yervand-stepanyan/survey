import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.customSpacing.base,
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  rangeBarChart: {
    margin: `${theme.customSpacing.small} ${theme.customSpacing.xxxLarge} ${theme.customSpacing.xxLarge} ${theme.customSpacing.small}`
  }
}));
