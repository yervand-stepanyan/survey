import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  questionSectionCreatorContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: `${theme.customSpacing.small}`,
    marginBottom: `${theme.customSpacing.xxLarge}`
  },
  questionSection: {
    height: '114px'
  },
  answerTypesWrapper: {
    marginTop: `${theme.customSpacing.small}`
  }
}));
