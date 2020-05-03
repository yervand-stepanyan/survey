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
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'space-between',
    '@media screen and (max-width: 992px)': {
      flexDirection: 'column',
    }
  },
  contactsWrapper: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.customSpacing.base,
    width: '50%',
    '@media screen and (max-width: 992px)': {
      margin: 'auto',
      width: 680,
    },
    '@media screen and (max-width: 768px)': {
        width: '100%'
    },
    '& .MuiListItemText-root': {
      wordWrap:'break-word',
    }

  },
  addressWrapper: {
    margin: `${theme.customSpacing.xLarge} 0`,
    padding: `${theme.customSpacing.small}`,
    '@media screen and (max-width: 992px)': {
      margin: `0 0 ${theme.customSpacing.xLarge} 0`
    }
  },
  mapWrapper: {
    borderRadius: `${theme.borders.borderRadius.base}`,
    boxSizing: 'border-box',
    height: '414px',
    padding: `${theme.customSpacing.base}`,
    marginTop: theme.customSpacing.xxLarge,
    width: '50%',
    '@media screen and (max-width: 992px)': {
      display: 'flex',
      flexDirection: 'column-reverse',
      height: 'unset',
      margin: 'auto',
      width: 680,
    },
    '@media screen and (max-width: 768px)': {
      width: '100%'
    },
  }
}));
