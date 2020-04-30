import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  questionSectionCreatorContainer: {
    display: 'flex',
    flexDirection: 'column',
    // marginBottom: `${theme.customSpacing.xxLarge}`,
    // padding: `0 0 ${theme.customSpacing.base}`,
    '@media only screen and (min-width: 600px)': {
      // padding: `${theme.customSpacing.base} 0`
    }
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
