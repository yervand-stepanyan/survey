const boxShadowColor = '#3ACEB2';
const mainColor = '#3ACEB2';
const mainTextColor = 'white';
const mainHoverColor= '#107461';
const transparent = "transparent";

const BORDER_RADIUS_VALUE = 10;
const MAIN_FONT_SIZE = 14;
const MAIN_SPACING_VALUE = 14;

const GLOBAL_STYLES = {
  borders: {
    borderRadius: {
      small: `${BORDER_RADIUS_VALUE * 0.5}px`,
      base: `${BORDER_RADIUS_VALUE}px`
    }
  },
  boxShadow: {
    base: `0px 0px 5px 1px ${boxShadowColor}`
  },
  color: {
    mainColor,
    mainTextColor,
    mainHoverColor,
    boxShadowColor,
    transparent
  },
  spacing: {
    small: `${MAIN_SPACING_VALUE * 0.5}px`,
    base: `${MAIN_SPACING_VALUE}px`,
    xLarge: `${MAIN_SPACING_VALUE * 3}px`
  },
  typography: {
    fontSize: {
      base: MAIN_FONT_SIZE,
    },
    fontFamily: {
      base: 'sans-serif'
    }
  }
};

export { GLOBAL_STYLES as default };

