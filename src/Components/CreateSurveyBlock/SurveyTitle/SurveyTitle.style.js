import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  surveyTitleContainer: {
    height: 'inherit'
  },
  titleWrapper: {
    display: 'flex',
    justifyContent: 'center',
    height: 'inherit',
    position: 'relative'
  },
  titleLabel: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: `0 ${theme.customSpacing.base}`,
    '@media only screen and (min-width: 600px)': {
      alignItems: 'flex-start',
      flexDirection: 'row',
      padding: `0 ${theme.customSpacing.xxLarge}`
    }
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    height: '36px',
    whiteSpace: 'nowrap',
    '@media only screen and (min-width: 600px)': {
      alignItems: 'flex-start',
      height: '48px'
    }
  },
  title: {
    color: `${theme.color.mainColorGreen}`,
    height: '90px',
    overflowY: 'auto',
    '@media only screen and (min-width: 600px)': {
      marginLeft: `${theme.customSpacing.base}`
    }
  },
  editIconWrapper: {
    position: 'absolute',
    right: 0,
    '@media only screen and (min-width: 600px)': {
      top: '-7px'
    }
  },
  editIcon: {
    '@media only screen and (max-width: 600px)': {
      '&.MuiButtonBase-root.MuiIconButton-root': {
        padding: '6px'
      }
    }
  }
}));
