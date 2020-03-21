import GLOBAL_STYLES from "../../Theme/GlobalStyle";

const styles = {
    header: {
        backgroundColor: GLOBAL_STYLES.mainColor,
    },
    rightToolbar: {
      marginLeft: 'auto',
      
      display: "flex",
    },
    menuItem: {
      marginRight: 16,
      textDecoration: "none",
      color: "white",
      '&:hover': {
          color: "#107461"
      }
    },
    logIn: {
      color: "white",
      backgroundColor: GLOBAL_STYLES.mainColor,
      borderColor: "white",
      '&:hover': {
        background: "white",
        color: GLOBAL_STYLES.mainColor,
        borderColor: GLOBAL_STYLES.mainColor,
     },
    },
    
    logo: {
      fontWeight: 700,
    }

  };

  export {styles as default}


