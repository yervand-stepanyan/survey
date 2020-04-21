import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '10px'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 5px grey',
      borderRadius: '10px'
    },
    '*::-webkit-scrollbar-thumb': {
      background: `${theme.color.mainColorGreen}`,
      borderRadius: '10px',
      '&:hover': {
        background: '#11703C'
      }
    }
  },
  mainContainer: {
    color: `${theme.customTypography.fontColor.base}`,
    backgroundColor: 'white',
    fontFamily: `${theme.customTypography.fontFamily.base}`,
    height: '100vh'
  }
}));