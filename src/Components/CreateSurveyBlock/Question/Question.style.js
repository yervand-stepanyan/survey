import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  questionContainer: {
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
    alignItems: 'center',
    flexDirection: 'column',
    padding: `0 ${theme.customSpacing.base}`,
    '@media only screen and (min-width: 600px)': {
      alignItems: 'flex-start',
      flexDirection: 'row',
      padding: `0 ${theme.customSpacing.xxxxLarge} 0 ${theme.customSpacing.xxLarge}`
    }
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    height: '48px',
    whiteSpace: 'nowrap',
    '@media only screen and (min-width: 600px)': {
      alignItems: 'flex-start'
    }
  },
  question: {
    color: `${theme.color.mainColorGreen}`,
    height: '90px',
    overflowY: 'auto',
    '@media only screen and (min-width: 600px)': {
      marginLeft: `${theme.customSpacing.base}`
    }
  },
  icons: {
    display: 'flex',
    position: 'absolute',
    right: 0,
    '@media only screen and (min-width: 600px)': {
      top: '-7px'
    }
  },
  editIcon: {
    marginRight: `${theme.customSpacing.small}`
  },
  removeIcon: {
    color: `${theme.color.redButton}`
  }
}));
