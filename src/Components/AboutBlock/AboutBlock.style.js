import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: `${theme.borders.borderRadius.base}`,
    boxShadow: `${theme.boxShadow.base}`,
    boxSizing: 'border-box',
    height: '100%',
    padding: `${theme.customSpacing.small}`
  }
}));
