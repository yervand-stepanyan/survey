import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

export const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  customText: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    '@media screen and (max-width: 992px)': {
      width: '100%',
      padding: `0 ${theme.customSpacing.base}`
    }
  },
  formControlLabel: {
    alignItems: 'start',
    width: '100%',
    '& .Mui-checked': {
      color: green[500]
    },
    '& .MuiFormControlLabel-label': {
      marginTop: theme.customSpacing.small
    }
  },
  radiobuttonInputAnswerContainer: {
    display: 'flex',
    marginTop: theme.customSpacing.small,
    '@media (max-width: 992px)': {
      flexDirection: 'column',
      width: '100%'
    },
    '& label': {
      width: 'inherit',
      '@media (max-width: 992px)': {
        width: '100%'
      }
    }
  },

  radiobuttonInputAnswer: {
    paddingBottom: theme.customSpacing.small
  }
}));
