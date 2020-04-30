import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  questionSectionContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: `${theme.customSpacing.base}`
  }
  // questionSection: {
  //   height: '160px',
  //   '@media only screen and (min-width: 600px)': {
  //     height: '114px'
  //   }
  // },
  // answerTypesWrapper: {
  //   marginTop: `${theme.customSpacing.small}`
  // }
}));
