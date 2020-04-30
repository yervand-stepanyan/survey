import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  inputSectionContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: `${theme.customSpacing.base}`,
    paddingBottom: `${theme.customSpacing.base}`
  },
  titleWrapper: {
    display: 'flex',
    justifyContent: 'center'
  },
  typeWrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: `${theme.customSpacing.large}`
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    margin: `${theme.customSpacing.base} ${theme.customSpacing.small} 0`
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
    cursor: 'pointer'
  },
  text: {
    color: `${theme.customTypography.fontColor.base}`
  },
  textClicked: {
    color: `${theme.customTypography.fontColor.clicked}`
  },
  imageContainer: {
    filter: 'grayscale(100%) opacity(50%)',
    height: '75px',
    outline: 'none',
    width: '150px'
  },
  imageContainerClicked: {
    height: '75px',
    outline: 'none',
    width: '150px'
  },
  image: {
    height: 'inherit',
    width: 'inherit'
  },
  imageClicked: {
    filter: 'contrast(110%)',
    height: 'inherit',
    width: 'inherit'
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: `${theme.customSpacing.xLarge}`
  },
  button: {
    backgroundColor: `${theme.color.mainColorGreen}`,
    color: 'white',
    '&:hover': {
      backgroundColor: `${theme.color.buttonHoverColorGreen}`
    }
  }
}));
