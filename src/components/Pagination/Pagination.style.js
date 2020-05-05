import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  paginationSection: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    marginTop: `${theme.customSpacing.xLarge}`
  }
}));
