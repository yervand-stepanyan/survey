import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  answerOptionsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: `${theme.customSpacing.large}`
  },
  typeImage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  textContainer: {
    cursor: 'pointer'
  },
  textContainerClicked: {
    cursor: 'pointer',
    outline: 'none'
  },
  text: {
    color: `${theme.customTypography.fontColor.base}`
  },
  textClicked: {
    color: `${theme.customTypography.fontColor.clicked}`
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
    outline: 'none',
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
