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
    alignItems: "flex-end",
    boxShadow: '0px 2px 1px -1px rgba(81, 76, 76, 0.2), 0px 1px 1px 0px rgba(159, 137, 137, 0.14), 0px 1px 3px 0px rgba(40, 44, 52, 0.55)',

  },
  cardButton: {
    borderTop: `0.5px solid lightgrey`,
    justifyContent: 'space-between',
  },
  seeAnswersButton: {
    border: `1px solid ${theme.color.mainColorDarkBlue}`,
    '& a' : {
      color: theme.color.mainColorDarkBlue,
      textDecoration: 'none',
    }
  },
  cardHeader: {
    minHeight: 130,
    '&:hover': {
      // background: theme.color.mainColorGreen,
      // color: 'white'
    },
  },
  cardTitle: {
    '&:hover': {
      // color: 'white'
    }
  },
  dateButton: {
    color: '#828282'
  }
}));
