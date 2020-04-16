import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%', 
    // borderRadius: `${theme.borders.borderRadius.base}`,
    // boxShadow: `${theme.boxShadow.base}`,
    boxSizing: 'border-box',
    // height: '100%',
    padding: `${theme.customSpacing.small}`
  },
  root: {
    maxWidth: 345,
    position: 'relative',
    // minWidth: 300,
    height:"auto",
    minHeight:230,
    alignItems: "flex-end"
  },
  cardButton: {
    position: 'absolute',
    bottom:0,
    borderTop: `0.5px solid lightgrey`,
  },
  seeAnswersButton: {
    textDecoration: 'none',
    color: '#3f51b5'
  },
  cardHeader: {
    '&:hover': {
      background: theme.color.mainColorGreen,
      // color: 'white'
    },
  },
  cardTitle: {
    '&:hover': {
      // color: 'white'
    }
  }
}));
