import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    marginBottom: theme.customSpacing.base
  },
  answerDetails: {
    padding: theme.customSpacing.xSmall
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  chartList: {
    width: '60%',
    padding: theme.customSpacing.base,
    '@media (max-width:400px)': {
      width: '100%'
    }
  },
  content: {
    flex: '1 0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width:400px)': {
      display: 'unset'
    }
  },
  cover: {
    width: 151
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  }
}));
