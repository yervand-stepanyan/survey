import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  radiobuttonSectionContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  titleWrapper: {
    display: 'flex',
    justifyContent: 'center'
  },
  inputWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: `${theme.customSpacing.large}`
  },
  textFieldWrapper: {
    width: '60%'
  },
  chipsWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: `${theme.customSpacing.large}`
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    border: `2px solid ${theme.color.mainColorGreen}`,
    borderRadius: `${theme.borders.borderRadius.base}`,
    boxSizing: 'border-box',
    height: '114px',
    overflowY: 'auto',
    padding: `${theme.customSpacing.small}`,
    width: '60%'
  },
  chip: {
    margin: `${theme.customSpacing.small}`,
    maxWidth: '100%'
  }
}));
