import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: `${theme.borders.borderRadius.base}`,
    boxShadow: `${theme.boxShadow.base}`,
    boxSizing: 'border-box',
    padding: `${theme.customSpacing.small}`
  },
  title: {
    display: 'flex',
    justifyContent: 'center'
  },
  contactsAndMapWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    marginTop: `${theme.customSpacing.xLarge}`,
    padding: `${theme.customSpacing.small}`
  },
  contactsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    width: '49%'
  },
  addressWrapper: {
    margin: `${theme.customSpacing.xLarge} 0`,
    padding: `${theme.customSpacing.small}`
  },
  mapWrapper: {
    borderRadius: `${theme.borders.borderRadius.base}`,
    boxShadow: `${theme.boxShadow.base}`,
    boxSizing: 'border-box',
    padding: `${theme.customSpacing.small}`,
    width: '49%',
    height: '100%'
  }
}));