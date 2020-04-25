import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  surveysContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: `${theme.borders.borderRadius.base}`,
    boxSizing: 'border-box',
    width: '60%'
  },
  noSurveysContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  }
}));
