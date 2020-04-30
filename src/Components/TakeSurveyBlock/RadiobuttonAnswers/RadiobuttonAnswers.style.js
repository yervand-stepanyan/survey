import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

export const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  formControlLabel: {
    '& .Mui-checked': {
      color: green[500]
    }
  },
  radiobuttonInputAnswerContainer: {
    display: 'flex'
  },
  radiobuttonInputAnswer: {
    paddingBottom: '20px',
    width: '100%'
  }
});
