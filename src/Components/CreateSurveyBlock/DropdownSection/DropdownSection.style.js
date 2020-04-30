import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  dropdownSectionContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: `${theme.customSpacing.base}`,
    paddingBottom: `${theme.customSpacing.base}`
  },
  titleWrapper: {
    display: 'flex',
    justifyContent: 'center'
  }
}));
