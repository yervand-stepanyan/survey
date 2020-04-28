import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import uuid from 'react-uuid';

import { useStyles } from './CustomTextChart.style';

function CustomTextChart({ title, data, count }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Card className={classes.root}>
      <CardContent>
        <div>
          <List component="nav" aria-label="main mailbox folders">
            <Typography variant="subtitle1" color="textSecondary">
              {title}
            </Typography>
          </List>
        </div>
      </CardContent>
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleOpen}
          className={classes.modalButton}
        >
          <PersonPinIcon />
          <Typography>{`${count} answers`}</Typography>
        </Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title">{title}</h2>
              <p id="transition-modal-description">
                <List component="nav" aria-label="main mailbox folders">
                  {data.map(answer => (
                    <ListItem button key={uuid()}>
                      <ListItemText primary={answer} />
                    </ListItem>
                  ))}
                </List>
              </p>
            </div>
          </Fade>
        </Modal>
      </div>
    </Card>
  );
}

CustomTextChart.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired
};

export default CustomTextChart;
