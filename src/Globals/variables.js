import checkboxImage from '../assets/images/answerOptions/checkboxes-720x420.png';
import dropdownImage from '../assets/images/answerOptions/dropdown-menu-720x420.png';
import inputDate from '../assets/images/inputOptions/input-date.png';
import inputImage from '../assets/images/answerOptions/inputfield-720x420.png';
import inputNumber from '../assets/images/inputOptions/input-number.png';
import inputText from '../assets/images/inputOptions/input-text.png';
import radiobuttonImage from '../assets/images/answerOptions/radiobuttons-720x420.png';
import rangeImage from '../assets/images/answerOptions/range-slider-720x420.png';
import ROUTES from '../Routes/Routes';

export const ADDRESS_SECTION = {
  address: '3 Hakob Hakobyan, Yerevan, Armenia',
  email: 'info@aca.am',
  phone: '+374 (12) 48-16-32'
};

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

export const BUTTON_LABELS = {
  customAnswersModalSeeAnswers: 'See answers',
  headerCreateSurvey: 'Create survey',
  questionCreatorCancel: 'Cancel',
  questionCreatorSubmit: 'Submit',
  saveSurvey: 'Save',
  surveyQuestionsSubmit: 'Submit',
  surveyTitleCreatorSubmit: 'Submit'
};

export const CONNECTION_ERROR = 'Connection error!';
export const CONNECTION_ERROR_REFRESH_BUTTON = 'Please, refresh the page!';

export const COPYRIGHT_INFO = 'Copyright © 2020 Survey';

export const CREATE_SURVEY_SNACKBAR_MESSAGE_ERROR =
  'Something went wrong. Try again!';
export const CREATE_SURVEY_SNACKBAR_MESSAGE_SUCCESS = 'Survey saved!';

export const CUSTOM_PIE_CHART_COLORS = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  '#B43ACE'
];

export const DEVELOPERS = [
  {
    firstName: 'Sose',
    lastName: 'Ghadyan',
    email: 'karnosose@gmail.com',
    phone: '+37493212564',
    githubPageURL: process.env.REACT_APP_SOSE_GITHUB_URL,
    linkedInPageURL: process.env.REACT_APP_SOSE_LINKEDIN_URL
  },
  {
    firstName: 'Yervand',
    lastName: 'Stepanyan',
    email: 'yervand.stepanyan@gmail.com',
    phone: '+37498772777',
    githubPageURL: process.env.REACT_APP_YERVAND_GITHUB_URL,
    linkedInPageURL: process.env.REACT_APP_YERVAND_LINKEDIN_URL
  },
  {
    firstName: 'Davit',
    lastName: 'Sahakyan',
    email: 'sahakyandavit92@gmail.com',
    phone: '+37498000065',
    githubPageURL: process.env.REACT_APP_DAVIT_GITHUB_URL,
    linkedInPageURL: process.env.REACT_APP_DAVIT_LINKEDIN_URL
  }
];

export const HOME_ICON_TOOLTIPS = {
  remove: 'Remove',
  results: 'Results',
  take: 'Take Survey'
};

export const INPUT_OPTION_TYPES = [
  { name: 'TEXT', src: inputText, tooltip: 'Text', text: 'Text' },
  { name: 'NUMBER', src: inputNumber, tooltip: 'Number', text: 'Number' },
  { name: 'DATE', src: inputDate, tooltip: 'Date', text: 'Date' }
];

export const INPUT_TYPES = {
  date: 'DATE',
  number: 'NUMBER',
  text: 'TEXT'
};

export const MAP_DETAILS = {
  initialCenter: {
    lat: 40.198929,
    lng: 44.490734
  },
  markerTitle: 'ACA',
  zoom: 15
};

export const MENU_ITEMS = [
  { name: 'Create Survey', route: ROUTES.create },
  { name: 'Contacts', route: ROUTES.contacts }
];

export const NO_ANSWER_FOR_SURVEY = 'There is no answer for this survey';

export const NO_SURVEY = 'No surveys yet!';
export const NO_SURVEY_CREATE_BUTTON = 'Click to create the first survey!';

export const NOT_FOUND_404 = '404';
export const NOT_FOUND_TEXT = 'Not found!';
export const NOT_FOUND_RETURN_BUTTON = 'Return to Homepage!';

export const REMOVE_SURVEY_SNACKBAR_MESSAGE_ERROR =
  'Something went wrong. Try again!';
export const REMOVE_SURVEY_SNACKBAR_MESSAGE_SUCCESS = 'Survey removed!';

export const SURVEYS_PER_PAGE = 7;

export const TABINDEX = 0;

export const TEXT_LABELS = {
  addNewQuestionLabel: 'Add question',
  answerTypeSectionTitle: 'Answer type',
  checkboxSectionTitle: 'Checkbox answer options',
  contactsBlockAddressSectionTitle: 'Address',
  contactsBlockDevelopersSectionTitle: 'Our developers',
  contactsBlockTitle: 'Contacts',
  createSurveyPageTitle: 'Create survey',
  dropdownSectionTitle: 'List options',
  dropdownAnswersSelectMenuItemNone: 'None',
  homePageTitle: 'Survey list',
  inputAnswersInputDateLabel: 'Date picker dialog',
  inputAnswersInputNumberLabel: 'Type here',
  inputAnswersInputTextLabel: 'Type here',
  inputAnswersErrorLabel: 'Something went wrong!',
  inputSectionTitle: 'Choose input type',
  optionsContainerCheckboxLabel: 'Add an input field as the last option',
  optionsContainerInputLabel: 'Type here',
  optionsContainerInputTooltipLabel: 'Input custom answer option name',
  optionsContainerTooltipMessage: 'At least 2 options should be entered!',
  questionSectionQuestionLabel: 'Question',
  questionCreatorErrorTooltipMessage: 'The question can not be empty!',
  questionCreatorHelpTooltipMessage: 'Input question!',
  questionCreatorInputErrorLabel: '* Invalid question',
  questionCreatorInputLabel: '* Question',
  questionCreatorQuestionLabel: 'Question:',
  radiobuttonAnswersInputLabel: '* Type here',
  radiobuttonAnswersInputErrorLabel: '* Invalid input',
  radiobuttonSectionTitle: 'Radiobutton answer options',
  rangeSectionTitle: 'Range values',
  rangeSectionEndValueErrorTooltipMessage: 'End value can not be empty!',
  rangeSectionEndValueHelpTooltipMessage: 'Input end value!',
  rangeSectionEndValueLabel: 'End value',
  rangeSectionEqualValuesErrorTooltipMessage:
    'Start and End values can not be equal!',
  rangeSectionInvalidEndValueErrorTooltipMessage: 'Invalid end value!',
  rangeSectionInvalidStartValueErrorTooltipMessage: 'Invalid start value!',
  rangeSectionInvalidStepValueErrorTooltipMessage: 'Invalid step value!',
  rangeSectionStartValueErrorTooltipMessage: 'Start value can not be empty!',
  rangeSectionStartValueHelpTooltipMessage: 'Input start value!',
  rangeSectionStartValueLabel: 'Start value',
  rangeSectionStepValueErrorTooltipMessage: 'Step value can not be empty!',
  rangeSectionStepValueHelpTooltipMessage: 'Input step value!',
  rangeSectionStepValueLabel: 'Step',
  surveyQuestionNoAnswerTypeChosen: 'No Answer type chosen',
  surveyTitleSectionSurveyTitleLabel: 'Survey title:',
  surveyTitleCreatorErrorTooltipMessage: 'The title can not be empty!',
  surveyTitleCreatorHelpTooltipMessage: 'Input survey title!',
  surveyTitleCreatorInputErrorLabel: '* Invalid title',
  surveyTitleCreatorInputLabel: '* Title',
  surveyTitleCreatorSurveyTitleLabel: 'Survey title:'
};
export const TAKE_SURVEY_SNACKBAR_MESSAGE_ERROR =
  'Something went wrong. Try again!';

export const TAKE_SURVEY_SNACKBAR_MESSAGE_SUCCESS = 'Submitted!';

export const WEBSITE_CREATOR = 'Website by SED Team';
