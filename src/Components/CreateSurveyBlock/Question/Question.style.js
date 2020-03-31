import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: 'inherit'
  },
  questionWrapper: {
    display: 'flex',
    justifyContent: 'center',
    height: 'inherit',
    position: 'relative',
    width: '100%'
  },
  questionLabel: {
    display: 'flex',
    padding: `0 ${theme.customSpacing.xxLarge}`
  },
  label: {
    whiteSpace: 'nowrap'
  },
  question: {
    color: `${theme.color.mainColorGreen}`,
    height: 'inherit',
    marginLeft: `${theme.customSpacing.base}`,
    overflowY: 'auto'
  },
  editIcon: {
    position: 'absolute',
    right: 0
  }
}));
