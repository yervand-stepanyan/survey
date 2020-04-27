import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.customSpacing.base
  },
  answers: {
    border: `1px solid ${theme.color.mainColorDarkBlue}`,
    borderRadius: theme.customSpacing.small,
  },
  answerDetails: {
    padding: `0 ${theme.customSpacing.base} ${theme.customSpacing.base}`,
    margin: `0 ${theme.customSpacing.base} ${theme.customSpacing.base}`,
  },
  avarageVal: {
    border: `1px solid ${theme.colors}`
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width:500px)': {
      display: 'unset'
    }
  },
  rangeBarChart: {
    margin: `${theme.customSpacing.small} ${theme.customSpacing.xxxLarge} ${theme.customSpacing.xxLarge} ${theme.customSpacing.small}`
  },
  chartList: {
    width: 500,
    height: 300,
    position: 'relative',
    right: 34,
    '@media (max-width:500px)': {
      width: '100%'
    }
  },
  
}));
