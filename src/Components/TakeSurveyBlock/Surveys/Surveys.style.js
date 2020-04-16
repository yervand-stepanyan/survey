import { makeStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

export const useStyles = makeStyles(theme => ({
  container: {
    borderRadius: `${theme.borders.borderRadius.base}`,
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto',
    maxWidth: '90vw',
    width: '640px'
  },
  surveysWrapper: {
    display: 'flex',
    justifyContent: 'left',
    marginBottom: `${theme.customSpacing.xLarge}`
  },
  surveyCard: {
    width: '150px',
    marginLeft: '10px',
    '& .MuiCardHeader-root': {
      padding: '5px'
    },
    '& .MuiCardMedia-root': {
      backgroundSize: 'contain'
    }
  },
  avatar: {
    backgroundColor: green[400]
  },
  CardActionArea: {
    margin: '0',
    padding: '0'
  },
  media: {
    height: '30px'
  },
  surveyNameWrapper: {
    paddingBottom: '8px'
  },
  button: {
    width: '100%'
  }
}));
