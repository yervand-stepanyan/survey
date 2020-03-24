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
      '&:hover': {
        background: GLOBAL_STYLES.color.mainTextColor,
        borderColor: GLOBAL_STYLES.color.mainColor,
        color: GLOBAL_STYLES.color.mainColor,
     },
    },
    
    logo: {
      fontWeight: 700,
    },

    menu: {
      display: "flex",
      marginLeft: 'auto',
    },

    menuItem: {
      border: `1px solid ${GLOBAL_STYLES.color.transparent}`,
      borderRadius: GLOBAL_STYLES.borders.borderRadius.small,
      color: GLOBAL_STYLES.color.mainTextColor,
      padding: `24px ${GLOBAL_STYLES.spacing.base}`,
      minWidth:100,
      textDecoration: "none",
      '&:hover': {
          backgroundColor: `${GLOBAL_STYLES.color.mainHoverColor}`,
          borderRadius: 0,
        }
    },
    menuItemLogin: {
      textDecoration: "none"
    }
  };  