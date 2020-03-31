import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    marginTop: `${theme.customSpacing.xxLarge}`,
    padding: `${theme.customSpacing.small}`,
    width: '100%'
  },
  titleWrapper: {
    display: 'flex',
    justifyContent: 'center'
  },
  sliderContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: `${theme.customSpacing.xLarge}`,
    padding: `${theme.customSpacing.small}`
  },
  sliderWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%'
  },
  partnerImage: {
    height: '100px',
    width: '100px'
  }
}));
