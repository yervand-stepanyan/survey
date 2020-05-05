import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    marginBottom: theme.customSpacing.base
  },
  answerDetails: {
    padding: theme.customSpacing.xSmall,
    '& .MuiButton-outlined ': {
      '@media screen and (max-width:600px)': {
        fontSize: 11,
        padding: 2
      }
    }
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  chartList: {
    width: '60%',
    padding: theme.customSpacing.base,
    '@media (max-width:600px)': {
      width: '100%'
    }
  },
  pieChart: {
    '@media (max-width:600px)': {
      margin: 'auto'
    }
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width:600px)': {
      padding: 0,
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
