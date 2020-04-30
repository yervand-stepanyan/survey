import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  surveyTitleContainer: {
    // display: 'flex',
    // flexDirection: 'column',
    height: 'inherit'
  },
  titleWrapper: {
    display: 'flex',
    // alignItems: 'center',
    justifyContent: 'center',
    height: 'inherit',
    position: 'relative',
    '@media only screen and (min-width: 600px)': {
      // alignItems: 'flex-start'
    }
    // width: '100%'
  },
  titleLabel: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: `0 ${theme.customSpacing.base}`,
    // height: 'inherit',
    // paddingRight: `${theme.customSpacing.xxLarge}`,
    '@media only screen and (min-width: 600px)': {
      alignItems: 'flex-start',
      flexDirection: 'row',
      padding: `0 ${theme.customSpacing.xxLarge}`
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
  title: {
    color: `${theme.color.mainColorGreen}`,
    height: '90px',
    overflowY: 'auto',
    // position: 'relative',
    '@media only screen and (min-width: 600px)': {
      marginLeft: `${theme.customSpacing.base}`
    }
  },
  editIcon: {
    position: 'absolute',
    right: 0,
    '@media only screen and (min-width: 600px)': {
      top: '-7px'
    }
  }
}));
