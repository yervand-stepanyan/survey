import betconstruct from '../assets/images/partners/betconstruct.png';
import checkboxImage from '../assets/images/answerOptions/checkboxes-720x420.png';
import dropdownImage from '../assets/images/answerOptions/dropdown-menu-720x420.png';
import helix from '../assets/images/partners/helix.png';
import inputDate from '../assets/images/inputOptions/input-date.png';
import inputImage from '../assets/images/answerOptions/inputfield-720x420.png';
import inputNumber from '../assets/images/inputOptions/input-number.png';
import inputText from '../assets/images/inputOptions/input-text.png';
import picsart from '../assets/images/partners/picsart.png';
import radiobuttonImage from '../assets/images/answerOptions/radiobuttons-720x420.png';
import rangeImage from '../assets/images/answerOptions/range-slider-720x420.png';
import ROUTES from '../Routes/Routes';
import sfl from '../assets/images/partners/sfl.png';
import teamable from '../assets/images/partners/teamable.png';
import workfront from '../assets/images/partners/workfront_new.png';

export const AD_IMAGE_URL = 'https://bit.ly/aca-logo';
export const AD_URL = 'https://bit.ly/aca-url';

export const ANSWER_OPTION_TYPES = [
  {
    name: 'INPUT',
    src: inputImage,
    tooltip: 'Input field',
    text: 'Input field'
  },
  {
    name: 'RADIOBUTTON',
    src: radiobuttonImage,
    tooltip: 'Radiobutton',
    text: 'Radiobutton'
  },
  {
    name: 'CHECKBOX',
    src: checkboxImage,
    tooltip: 'Checkbox',
    text: 'Checkbox'
  },
  {
    name: 'DROPDOWN',
    src: dropdownImage,
    tooltip: 'Dropdown',
    text: 'Dropdown list'
  },
  { name: 'RANGE', src: rangeImage, tooltip: 'Range', text: 'Range' }
];

export const ANSWER_SECTION_BUTTON_LABEL = 'Submit & continue';
export const ANSWER_SECTION_BUTTON_ACCEPT_CHANGES_LABEL = 'Accept changes';

export const ANSWER_TYPES = {
  checkbox: 'CHECKBOX',
  dropdown: 'DROPDOWN',
  input: 'INPUT',
  radiobutton: 'RADIOBUTTON',
  range: 'RANGE'
};

export const CONNECTION_ERROR = 'Connection error!';
export const CONNECTION_ERROR_TRY_AGAIN = 'Try again later!';

export const COPYRIGHT_INFO = 'Copyright © 2020 Survey';

export const CREATE_SURVEY_SNACKBAR_MESSAGE_ERROR =
  'Something went wrong. Try again!';
export const CREATE_SURVEY_SNACKBAR_MESSAGE_SUCCESS = 'Survey saved!';

export const INPUT_TYPES = [
  { name: 'TEXT', src: inputText, tooltip: 'Text', text: 'Text' },
  { name: 'NUMBER', src: inputNumber, tooltip: 'Number', text: 'Number' },
  { name: 'DATE', src: inputDate, tooltip: 'Date', text: 'Date' }
];

export const MENU_ITEMS = [
  { name: 'Create Survey', route: ROUTES.create },
  { name: 'Take Survey', route: ROUTES.survey },
  { name: 'Results', route: ROUTES.results },
  { name: 'About', route: ROUTES.about },
  { name: 'Contacts', route: ROUTES.contacts }
];

export const NO_SURVEY_TITLE = 'No surveys yet!';
export const NO_SURVEY_TEXT = 'Create the first survey!';

export const PARTNERS_IMAGES = [
  betconstruct,
  helix,
  picsart,
  sfl,
  teamable,
  workfront
];

export const REMOVE_SURVEY_SNACKBAR_MESSAGE_ERROR =
  'Something went wrong. Try again!';
export const REMOVE_SURVEY_SNACKBAR_MESSAGE_SUCCESS = 'Survey removed!';

export const SLIDER_TIMER = 4000;

export const WEBSITE_CREATOR = 'Website by SED Team';
