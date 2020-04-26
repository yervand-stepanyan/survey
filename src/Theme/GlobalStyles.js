import { createMuiTheme } from '@material-ui/core/styles';

const boxShadowColor = '#79d5a3';
const mainColorDarkBlue = '#282C34';
const mainColorGreen = '#20BA66';
const buttonHoverColorGreen = '#11703C';
const mainTextColor = '#282C34';

const BORDER_RADIUS_VALUE = 10;
const MAIN_FONT_SIZE = 14;
const MAIN_SPACING_VALUE = 14;

const theme = createMuiTheme({
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
    buttonHoverColorGreen,
    mainColorDarkBlue,
    mainColorGreen
  },
  customSpacing: {
    xSmall: `${MAIN_SPACING_VALUE * 0.2}px`,
    small: `${MAIN_SPACING_VALUE}px`,
    base: `${MAIN_SPACING_VALUE}px`,
    large: `${MAIN_SPACING_VALUE * 2}px`,
    xLarge: `${MAIN_SPACING_VALUE * 3}px`,
    xxLarge: `${MAIN_SPACING_VALUE * 4}px`,
    xxxLarge: `${MAIN_SPACING_VALUE * 6}px`,
    xxxxLarge: `${MAIN_SPACING_VALUE * 8}px`
  },
  customTypography: {
    fontColor: {
      base: mainTextColor,
      clicked: mainColorGreen
    },
    fontFamily: {
      base: 'sans-serif'
    },
    fontSize: {
      base: `${MAIN_FONT_SIZE}px`
    }
  }
});

export { theme as default };