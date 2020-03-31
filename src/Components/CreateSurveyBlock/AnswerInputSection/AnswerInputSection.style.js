import GLOBAL_STYLES from '../../../Theme/GlobalStyles';

export const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  titleWrapper: {
    display: 'flex',
    justifyContent: 'center'
  },
  imageContainer: {
    border: '10px solid transparent',
    cursor: 'pointer',
    filter: 'grayscale(100%) opacity(50%)',
    height: '75px',
    width: '150px'
  },
  typeWrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: `${GLOBAL_STYLES.spacing.small}`
  },
  imageContainerClicked: {
    border: `10px solid ${GLOBAL_STYLES.color.mainColorGreen}`,
    cursor: 'pointer',
    filter: 'drop-shadow(8px 8px 10px gray)',
    height: '75px',
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
  }
};
