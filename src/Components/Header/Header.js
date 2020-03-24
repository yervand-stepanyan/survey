import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {BrowserRouter as Router, Link} from "react-router-dom";
import Button from '@material-ui/core/Button';

const menuItems = ["Create Survey", "Results", "Take Survey", "About", "Contact"];

function Header (props) {
  const { classes } = props;
  return (
    <Router>
      <AppBar position="static" className={classes.container}>
        <Toolbar>
          <Link to="/" className={`${classes.menuItem  } ${classes.logo}`}>
            Survey
          </Link>

          <nav className={classes.menu}>
            {menuItems.map(item => {
              return (
                <Link to="/" className={classes.menuItem}>
                  {item}
                </Link>
              )
            })}
          </nav>
          <Link to="/" className={classes.menuItem}>
            <Button variant="outlined" className={classes.logInButton}>Log in</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Router>
   )
};

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Header;
