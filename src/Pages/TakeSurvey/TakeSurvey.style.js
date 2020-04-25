import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 'auto',
    marginTop: `${theme.customSpacing.xxLarge}`,
    padding: `0 ${theme.customSpacing.base}`
  }
}));
