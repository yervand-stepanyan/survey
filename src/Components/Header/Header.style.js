import GLOBAL_STYLES from "../../Theme/GlobalStyle";

export const styles = {
    container: {
        backgroundColor: GLOBAL_STYLES.mainBackgroundColor,
    },

    logInButton: {
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
    },

    menu: {
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
  };  