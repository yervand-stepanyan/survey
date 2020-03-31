import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    marginTop: `${theme.customSpacing.xxLarge}`,
    padding: `0 ${theme.customSpacing.base}`
  }
}));
