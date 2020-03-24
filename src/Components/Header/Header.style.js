import GLOBAL_STYLES from "../../Theme/GlobalStyle";

export const styles = {
    container: {
        backgroundColor: GLOBAL_STYLES.color.mainColor,
    },

    logInButton: {
      backgroundColor: GLOBAL_STYLES.color.mainGreen,
      borderColor: GLOBAL_STYLES.color.mainColor,
      color: GLOBAL_STYLES.color.mainTextColor,
      textDecoration: "none",
      marginLeft: GLOBAL_STYLES.spacing.base,
      '&:hover': {
        background: GLOBAL_STYLES.color.mainTextColor,
        borderColor: GLOBAL_STYLES.color.mainColor,
        color: GLOBAL_STYLES.color.mainGreen,
     },
    },
    
    logo: {
      height: "100%",
    },

    menu: {
      display: "flex",
      marginLeft: 'auto',
    },

    menuItem: {
      color: GLOBAL_STYLES.color.mainTextColor,
      padding: `${GLOBAL_STYLES.spacing.small} ${GLOBAL_STYLES.spacing.base}`,
      minWidth:100,
      textAlign: "center",
      textDecoration: "none",
      border: `1px solid ${GLOBAL_STYLES.color.transparent}`,
      '&:hover': {
          borderRadius: GLOBAL_STYLES.borders.borderRadius.small,
          border: `1px solid ${GLOBAL_STYLES.color.mainGreen}`,
        }
    },
    menuItemLogin: {
      textDecoration: "none"
    }
  };  