import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  noSurveysContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  surveyHeading: {
    textAlign: 'center',
    padding: theme.customSpacing.large
  },
  surveyList: {
    minWidth: 900,

    '@media screen and (max-width: 992px)': {
      minWidth: 550
    },
    '@media screen and (max-width: 600px)': {
      minWidth: 'unset'
    }
  }
}));
