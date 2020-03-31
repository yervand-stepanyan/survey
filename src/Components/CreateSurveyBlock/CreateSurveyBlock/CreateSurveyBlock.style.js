import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: `${theme.borders.borderRadius.base}`,
    boxShadow: `${theme.boxShadow.base}`,
    boxSizing: 'border-box',
    minHeight: '100%',
    padding: `0 ${theme.customSpacing.small}`
  },
  blockTitleWrapper: {
    display: 'flex',
    justifyContent: 'center'
  },
  createSurveyWrapper: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: `${theme.customSpacing.large}`,
    padding: `0 ${theme.customSpacing.small}`
  },
  titleWrapper: {
    height: '114px'
  }
}));
