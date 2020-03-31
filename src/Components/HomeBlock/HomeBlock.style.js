import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: `${theme.borders.borderRadius.base}`,
    boxShadow: `${theme.boxShadow.base}`,
    boxSizing: 'border-box',
    padding: `${theme.customSpacing.small}`,
    width: '75%'
  }
}));
