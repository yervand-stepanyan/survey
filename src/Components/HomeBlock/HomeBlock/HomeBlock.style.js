import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  homeBlockContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: `${theme.borders.borderRadius.base}`,
    boxSizing: 'border-box',
    width: '60%',
    '@media (max-width:1000px)': {
      width: '80%'
    },
    '@media (max-width:450px)': {
      width: '95%'
    }
  },
  noSurveysContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  }
}));
