import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  takeSurveyBlockContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `0 ${theme.customSpacing.base}`
  },
  notFoundContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  }
}));
