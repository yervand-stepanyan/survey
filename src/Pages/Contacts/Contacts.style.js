import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  // contactsContainer: {
  //   marginTop: `${theme.customSpacing.xxLarge}`,
  //   padding: `0 ${theme.customSpacing.base}`
  // }
  contactsContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: `${theme.customSpacing.large}`,
    minHeight: 'inherit'
  }
}));
