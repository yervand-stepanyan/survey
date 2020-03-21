import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {BrowserRouter as Router, Link} from "react-router-dom";
import Button from '@material-ui/core/Button';


import styles from "./style"

const menuItems = ["Create Survey", "Results", "Take Survey", "About", "Contact"];



const Header = ({ classes }) => (
  <Router>
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <Link to="/" className={`${classes.menuItem  } ${  classes.logo}`}>
          Survey
        </Link>

        <nav className={classes.rightToolbar}>
          {menuItems.map(item => {
            return (
              <Link to="/" className={classes.menuItem}>
                {item}
              </Link>
            )
          })}
        </nav>
        <Link to="/" className={classes.menuItem}>
          <Button variant="outlined" className={classes.logIn}>Log in</Button>
        </Link>
      </Toolbar>
    </AppBar>
  </Router>
);

Header.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
