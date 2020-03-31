import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    marginTop: `${theme.customSpacing.xxLarge}`,
    padding: `0 ${theme.customSpacing.base}`
  }
}));
