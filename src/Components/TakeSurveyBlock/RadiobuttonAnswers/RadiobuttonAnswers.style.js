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
  }
});
