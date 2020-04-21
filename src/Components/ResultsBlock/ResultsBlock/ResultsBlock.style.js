import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    // backgroundColor: 'black',
  },
  resultsContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: 1024, 
    margin: 'auto',
    // borderRadius: `${theme.borders.borderRadius.base}`,
    // boxShadow: `${theme.boxShadow.base}`,
    boxSizing: 'border-box',
    // height: '100%',
    padding: `${theme.customSpacing.small}`
  },
  root: {
    // maxWidth: 345,
    position: 'relative',
    height:"auto",
    alignItems: "flex-end"
  },
  cardButton: {
    borderTop: `0.5px solid lightgrey`,
  },
  seeAnswersButton: {
    textDecoration: 'none',
    color: '#3f51b5'
  },
  cardHeader: {
    minHeight: 165,
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
