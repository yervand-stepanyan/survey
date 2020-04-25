import React from 'react';
import PropTypes from 'prop-types';

import Snackbar from '@material-ui/core/Snackbar';

import Alert from '../Alert';

const SNACKBAR_MESSAGE_ERROR = 'Something went wrong. Try again!';
const SNACKBAR_MESSAGE_SUCCESS = 'Survey saved!';

function SnackbarComponent({ onClose, open, showSuccess }) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      autoHideDuration={2000}
      onClose={onClose}
      open={open}
    >
      {showSuccess ? (
        <Alert onClose={onClose} severity="success">
          {SNACKBAR_MESSAGE_SUCCESS}
        </Alert>
      ) : (
        <Alert severity="error">{SNACKBAR_MESSAGE_ERROR}</Alert>
      )}
    </Snackbar>
  );
}

SnackbarComponent.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  showSuccess: PropTypes.bool.isRequired
};

export default SnackbarComponent;
