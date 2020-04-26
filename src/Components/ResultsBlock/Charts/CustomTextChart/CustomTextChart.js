import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useStyles } from './CustomTextChart.style';





function CustomTextChart ({title, data}) {
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

      <div className={classes.details}>

        <CardContent className={classes.content}>
          <div className={classes.chartList}>
            <List component="nav" aria-label="main mailbox folders">
              <Typography variant="subtitle1" color="textSecondary">
                {title}
              </Typography>
              
            </List>
          </div>
        
        </CardContent>
      </div>
      <div>
        <button type="button" onClick={handleOpen}>
          see answers
        </button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title">{title}</h2>
              <p id="transition-modal-description">
                <ul>
                  {data.map(answer => (
                    <li>{answer}</li>
                  ))}
                </ul>
              </p>
            </div>
          </Fade>
        </Modal>
      </div>
    </Card>
      
    
  )
}

export default CustomTextChart;