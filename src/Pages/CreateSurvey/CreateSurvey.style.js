import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  createSurveyContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
    marginTop: `${theme.customSpacing.xxLarge}`,
    padding: `0 ${theme.customSpacing.base}`
  }
}));
