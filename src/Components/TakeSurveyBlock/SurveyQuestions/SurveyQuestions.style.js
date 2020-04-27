import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  surveyQuestionsContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    minWidth: '300px',
    maxWidth: '800px',
    width: '90vw'
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: `${theme.customSpacing.base} ${theme.customSpacing.large}`
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: `${theme.customSpacing.base}`,
    position: 'relative'
  },
  buttonProgress: {
    color: `${theme.color.buttonHoverColorGreen}`,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  }
}));
