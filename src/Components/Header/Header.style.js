import GLOBAL_STYLES from "../../Theme/GlobalStyle";

export const styles = {
    container: {
        backgroundColor: GLOBAL_STYLES.color.mainColor,
    },

    logInButton: {
      backgroundColor: GLOBAL_STYLES.color.mainColor,
      borderColor: GLOBAL_STYLES.color.mainTextColor,
      color: GLOBAL_STYLES.mainTextColor,
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
      marginRight: 43,
      padding: GLOBAL_STYLES.spacing.small,
      textDecoration: "none",
      '&:hover': {
          fontWeight:400,
          border: `1px solid ${GLOBAL_STYLES.color.mainTextColor}`,
        }
    },
  };  