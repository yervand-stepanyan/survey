import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  homeContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: `${theme.customSpacing.xLarge} auto`,
    minHeight: '100%',
    width: '95%'
  }
}));
