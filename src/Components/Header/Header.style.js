import GLOBAL_STYLES from "../../Theme/GlobalStyle";

// eslint-disable-next-line import/prefer-default-export
export const styles = {
    header: {
        backgroundColor: GLOBAL_STYLES.mainBackgroundColor,
    },
    rightToolbar: {
      marginLeft: 'auto',
      
      display: "flex",
    },
    menuItem: {
      marginRight: 43,
      textDecoration: "none",
      color: GLOBAL_STYLES.mainColor,
      '&:hover': {
          color: GLOBAL_STYLES.mainHoverColor,
      }
    },
    logIn: {
      color: GLOBAL_STYLES.mainColor,
      backgroundColor: GLOBAL_STYLES.mainBackgroundColor,
      borderColor: GLOBAL_STYLES.mainColor,
      '&:hover': {
        background: GLOBAL_STYLES.mainColor,
        color: GLOBAL_STYLES.mainBackgroundColor,
        borderColor: GLOBAL_STYLES.mainBackgroundColor,
     },
    },
    
    logo: {
      fontWeight: 700,
    }

  };



