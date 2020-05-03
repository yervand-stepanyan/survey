import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  title: {
    display: 'flex',
    justifyContent: 'center',
    padding: `${theme.customSpacing.xLarge} 0`
  },
  developersTitle: {
    padding: `${theme.customSpacing.small} ${theme.customSpacing.base}`
  },
  contactsAndMapWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
  },
  contactsWrapper: {
    padding: theme.customSpacing.base,
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    width: '50%'
  },
  addressWrapper: {
    margin: `${theme.customSpacing.xLarge} 0`,
    padding: `${theme.customSpacing.small}`
  },
  mapWrapper: {
    borderRadius: `${theme.borders.borderRadius.base}`,
    boxSizing: 'border-box',
    height: '414px',
    padding: `${theme.customSpacing.base}`,
    marginTop: theme.customSpacing.xxLarge,
    width: '50%',
  }
}));
