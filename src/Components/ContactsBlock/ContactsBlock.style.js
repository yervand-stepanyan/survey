import GLOBAL_STYLES from '../../Theme/GlobalStyles';

export const styles = {
  container: {
    backgroundColor: `${GLOBAL_STYLES.color.mainColorDarkBlue}`,
    borderRadius: `${GLOBAL_STYLES.borders.borderRadius.base}`,
    boxSizing: "border-box",
    color: "white",
    height: "55%",
    padding: `${GLOBAL_STYLES.spacing.xxLarge} ${GLOBAL_STYLES.spacing.xxxLarge}`,
    width: "60%",
  },
  avatar: {
    display: "flex",
    flexGrow: 8,
    padding: `${GLOBAL_STYLES.spacing.base}`,
  },
  description: {
    padding: `${GLOBAL_STYLES.spacing.small}`
  }
}