import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  questionSectionContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: `${theme.customSpacing.base}`,
    padding: `${theme.customSpacing.small} ${theme.customSpacing.small} 0`
  }
}));
