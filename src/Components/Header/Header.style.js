import GLOBAL_STYLES from "../../Theme/GlobalStyle";

export const styles = {
    container: {
        backgroundColor: GLOBAL_STYLES.color.mainColor,
    },

    logInButton: {
      backgroundColor: GLOBAL_STYLES.color.mainColor,
      borderColor: GLOBAL_STYLES.color.mainTextColor,
      color: GLOBAL_STYLES.mainTextColor,
      textDecoration: "none",
      marginLeft: GLOBAL_STYLES.spacing.base,
      '&:hover': {
        background: GLOBAL_STYLES.color.mainTextColor,
        borderColor: GLOBAL_STYLES.color.mainColor,
        color: GLOBAL_STYLES.color.mainColor,
     },
    },
    
    logo: {
      fontWeight: 700,
      color: GLOBAL_STYLES.color.mainTextColor,
      padding: `24px ${GLOBAL_STYLES.spacing.base}`,
      textDecoration: "none",
    },

    menu: {
      display: "flex",
      marginLeft: 'auto',
    },

    menuItem: {
      color: GLOBAL_STYLES.color.mainTextColor,
      padding: `24px ${GLOBAL_STYLES.spacing.base}`,
      minWidth:100,
      textDecoration: "none",
      '&:hover': {
          backgroundColor: `${GLOBAL_STYLES.color.mainHoverColor}`,
        }
    },
    menuItemLogin: {
      textDecoration: "none"
    }
  };  