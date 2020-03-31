import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: `${theme.customSpacing.small}`
  },
  imageContainer: {
    border: '10px solid transparent',
    cursor: 'pointer',
    filter: 'grayscale(100%) opacity(50%)',
    height: '100px',
    width: '200px'
  },
  imageContainerClicked: {
    border: `10px solid ${theme.color.mainColorGreen}`,
    cursor: 'pointer',
    filter: 'drop-shadow(8px 8px 10px gray)',
    height: '100px',
    width: '200px'
  },
  image: {
    height: 'inherit',
    width: 'inherit'
  },
  imageClicked: {
    filter: 'contrast(110%)',
    height: 'inherit',
    width: 'inherit'
  }
}));
