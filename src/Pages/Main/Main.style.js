import GLOBAL_STYLES from '../../Theme/GlobalStyles';

export const styles = {
  '@global': {
    '*::-webkit-scrollbar': {
      width: '10px'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 5px grey',
      borderRadius: '10px'
    },
    '*::-webkit-scrollbar-thumb': {
      background: `${GLOBAL_STYLES.color.mainColorGreen}`,
      borderRadius: '10px',
      '&:hover': {
        background: '#11703C'
      }
    }
  },
  mainContainer: {
    color: `${GLOBAL_STYLES.typography.fontColor.base}`,
    backgroundColor: 'white',
    fontFamily: `${GLOBAL_STYLES.typography.fontFamily.base}`,
    height: '100vh'
  }
};
