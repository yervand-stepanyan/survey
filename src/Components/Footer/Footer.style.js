import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: `${theme.color.mainColorDarkBlue}`,
    display: 'flex',
    flexDirection: 'column',
    marginTop: `${theme.customSpacing.xxxLarge}`,
    padding: `${theme.customSpacing.large} ${theme.customSpacing.base}`
  },
  logoAndMenuWrapper: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  logoSection: {
    alignSelf: 'center'
  },
  menuSection: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: `${theme.customSpacing.base}`
  },
  menu: {
    marginBottom: `${theme.customSpacing.base}`
  },
  menuItem: {
    border: '1px solid transparent',
    color: 'white',
    padding: `${theme.customSpacing.small} ${theme.customSpacing.base}`,
    textDecoration: 'none',
    '&:hover': {
      border: `1px solid ${theme.color.mainColorGreen}`,
      borderRadius: `${theme.borders.borderRadius.base}`,
      color: `${theme.color.mainColorGreen}`
    }
  },
  infoWrapper: {
    color: 'white',
    marginTop: `${theme.customSpacing.xxLarge}`
  },
  infoSection: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative'
  },
  websiteCreator: {
    position: 'absolute',
    right: 0
  }
}));
