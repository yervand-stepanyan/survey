import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  answerOptionsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: `${theme.customSpacing.base}`,
    paddingBottom: `${theme.customSpacing.base}`
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: `${theme.customSpacing.base}`
  },
  textImageContainer: {
    border: '10px solid transparent',
    cursor: 'pointer'
  },
  textImageContainerClicked: {
    border: `10px solid ${theme.color.mainColorGreen}`,
    cursor: 'pointer',
    outline: 'none'
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'center',
    outline: 'none'
  },
  text: {
    color: `${theme.customTypography.fontColor.base}`
  },
  textClicked: {
    color: `${theme.customTypography.fontColor.clicked}`
  },
  imageContainer: {
    filter: 'grayscale(100%) opacity(50%)',
    height: '100px',
    outline: 'none',
    width: '200px'
  },
  imageContainerClicked: {
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
