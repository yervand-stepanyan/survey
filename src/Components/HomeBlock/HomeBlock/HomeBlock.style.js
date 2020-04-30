import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  homeBlockContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: `${theme.borders.borderRadius.base}`,
    boxSizing: 'border-box'
  },
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
      width: '90%',
      minWidth: 'unset'
    }
  }
}));
