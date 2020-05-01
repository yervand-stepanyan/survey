import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

import Button from '@material-ui/core/Button';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import { BUTTON_LABELS } from '../../../../Globals/variables';
import { useStyles } from './CustomAnswersModal.style';

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 0,
    padding: theme.spacing(2)
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose } = props;

  return (
    <MuiDialogTitle className={classes.root} disableTypography>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

function CustomAnswersModal({ customText, title }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button color="primary" onClick={handleClickOpen} variant="outlined">
        <PersonPinIcon />
        {BUTTON_LABELS.customAnswersModalSeeAnswers}
      </Button>
      <Dialog
        aria-labelledby="customized-dialog-title"
        className={classes.dialog}
        onClose={handleClose}
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {title}
        </DialogTitle>
        <DialogContent dividers>
          {customText.map(text => (
            <ListItem key={uuid()}>
              <ListItemIcon>
                <CheckRoundedIcon />
              </ListItemIcon>

              <ListItemText primary={text} />
            </ListItem>
          ))}
        </DialogContent>
      </Dialog>
    </div>
  );
}

CustomAnswersModal.propTypes = {
  customText: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};

export default CustomAnswersModal;
