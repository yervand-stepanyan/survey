import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  addNewQuestionContainer: {
    display: 'flex',
    marginTop: `${theme.customSpacing.large}`,
    padding: `0 ${theme.customSpacing.xxLarge}`
  },
  buttonWrapper: {
    '&:hover + $textWrapper': {
      color: `${theme.color.mainColorGreen}`
    }
  },
  textWrapper: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    outline: 'none',
    paddingLeft: `${theme.customSpacing.base}`,
    '&:hover': {
      color: `${theme.color.mainColorGreen}`
    }
  },
  textWrapperDisabled: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'default',
    outline: 'none'
  }
}));
