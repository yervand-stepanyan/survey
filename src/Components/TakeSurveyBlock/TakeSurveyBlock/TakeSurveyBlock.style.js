import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    borderRadius: `${theme.borders.borderRadius.base}`,
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto',
    maxWidth: '90vw',
    width: '640px'
  }
}));
