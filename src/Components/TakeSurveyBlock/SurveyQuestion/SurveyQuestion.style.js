import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginBottom: `${theme.customSpacing.base}`
  },
  card: {
    width: '100%',
    padding: `${theme.customSpacing.small}`
  }
}));
