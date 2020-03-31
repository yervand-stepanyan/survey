import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  developersSection: {
    display: 'flex',
    flexDirection: 'column',
    padding: `${theme.customSpacing.small}`
  }
}));
