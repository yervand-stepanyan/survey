import React from 'react';
import PropTypes from 'prop-types';

import Snackbar from '@material-ui/core/Snackbar';

import Alert from '../Alert';

function SnackbarComponent({ onClose, open, showSuccess, snackbarText }) {
  return (
    <Snackbar
      anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      autoHideDuration={2000}
      onClose={onClose}
      open={open}
    >
      {showSuccess ? (
        <Alert onClose={onClose} severity="success">
          {snackbarText}
        </Alert>
      ) : (
        <Alert severity="error">{snackbarText}</Alert>
      )}
    </Snackbar>
  );
}

SnackbarComponent.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  showSuccess: PropTypes.bool.isRequired,
  snackbarText: PropTypes.string.isRequired
};

export default SnackbarComponent;
