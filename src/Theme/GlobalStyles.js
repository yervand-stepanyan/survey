const boxShadowColor = '#79d5a3';
const mainColorDarkBlue = '#282C34';
const mainColorGreen = '#20BA66';
const mainTextColor = '#282C34';

const BORDER_RADIUS_VALUE = 10;
const MAIN_FONT_SIZE = 14;
const MAIN_SPACING_VALUE = 14;

const GLOBAL_STYLES = {
  borders: {
    borderRadius: {
      base: `${BORDER_RADIUS_VALUE}px`
    }
  },
  boxShadow: {
    base: `0px 0px 5px 1px ${boxShadowColor}`
  },
  color: {
    boxShadowColor,
    mainColorDarkBlue,
    mainColorGreen
  },
  spacing: {
    small: `${MAIN_SPACING_VALUE * 0.5}px`,
    base: `${MAIN_SPACING_VALUE}px`,
    large: `${MAIN_SPACING_VALUE * 2}px`,
    xLarge: `${MAIN_SPACING_VALUE * 3}px`,
    xxLarge: `${MAIN_SPACING_VALUE * 4}px`,
    xxxLarge: `${MAIN_SPACING_VALUE * 8}px`
  },
  typography: {
    fontColor: {
      base: mainTextColor
    },
    fontFamily: {
      base: 'sans-serif'
    },
    fontSize: {
      base: `${MAIN_FONT_SIZE}px`
    }
  }
};

export { GLOBAL_STYLES as default };
