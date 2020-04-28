import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  homeContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: `${theme.customSpacing.large}`,
    minHeight: 'inherit'
  }
}));
