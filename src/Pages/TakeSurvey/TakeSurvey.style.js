import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  takeSurveyContainer: {
    display: 'flex',
    justifyContent: 'center',
    minHeight: 'inherit',
    paddingBottom: `${theme.customSpacing.xLarge}`
  }
}));
