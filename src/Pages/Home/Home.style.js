import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '78%',
    marginTop: `${theme.customSpacing.xxLarge}`,
    padding: `0 ${theme.customSpacing.base}`
  },
  homeAndAdsWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '80%'
  }
}));
