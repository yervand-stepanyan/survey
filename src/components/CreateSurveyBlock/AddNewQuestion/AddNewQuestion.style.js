import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  addNewQuestionContainer: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: `${theme.customSpacing.base}`,
    marginTop: `${theme.customSpacing.small}`,
    '@media only screen and (min-width: 600px)': {
      justifyContent: 'flex-start',
      padding: `0 0 ${theme.customSpacing.base} ${theme.customSpacing.xxLarge}`
    }
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
  }
}));
