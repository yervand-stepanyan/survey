import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  cover: {
    width: 151
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  customAnswer: {
    flex: 'unset',
    marginRight: theme.customSpacing.base
  },
  dialog: {
    minWidth: 300
  },
  playIcon: {
    height: 38,
    width: 38
  }
}));
