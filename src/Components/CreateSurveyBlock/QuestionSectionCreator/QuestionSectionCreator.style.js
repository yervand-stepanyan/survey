import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  questionSectionCreatorContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: `${theme.customSpacing.small}`
  },
  questionSection: {
    height: '160px',
    paddingBottom: `${theme.customSpacing.base}`,
    '@media only screen and (min-width: 600px)': {
      height: '114px',
      padding: `${theme.customSpacing.base} 0`
    }
  }
}));
