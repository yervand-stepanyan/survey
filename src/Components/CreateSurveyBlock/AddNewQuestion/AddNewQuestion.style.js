import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  addNewQuestionContainer: {
    display: 'flex',
    marginTop: '28px',
    padding: `0 ${theme.customSpacing.xxLarge}`
  },
  buttonWrapper: {
    marginRight: '14px',
    '&:hover + $textWrapper': {
      color: `${theme.color.mainColorGreen}`
    }
  },
  textWrapper: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    outline: 'none',
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
