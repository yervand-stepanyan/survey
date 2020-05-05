import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  noSurveyBlockContainer: {
    textAlign: 'center'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: `${theme.customSpacing.large}`
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  link: {
    textDecoration: 'none'
  }
}));
