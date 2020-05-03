import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  // contactsBlockContainer: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   boxSizing: 'border-box',
  //   width: '90%'
  // },
  title: {
    display: 'flex',
    justifyContent: 'center',
    padding: `${theme.customSpacing.xLarge} 0`
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
    marginTop: theme.customSpacing.xLarge,
    // boxShadow: `${theme.boxShadow.base}`,
    boxSizing: 'border-box',
    padding: `${theme.customSpacing.base}`,
    width: '50%',
    height: '414px'
  }
}));
