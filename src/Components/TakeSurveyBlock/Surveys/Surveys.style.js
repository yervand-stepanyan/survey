import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  surveysContainer: {
    borderRadius: `${theme.borders.borderRadius.base}`,
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    maxWidth: '90vw',
    width: '640px'
  }
}));
