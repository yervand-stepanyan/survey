import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';

import logo from '../../assets/images/logo/logo.png';

const LOGIN_BUTTON = 'Log in';
const MENU_ITEMS = [
  'Create Survey',
  'Results',
  'Take Survey',
  'About',
  'Contact'
];

function Header({ classes }) {
  return (
    <Router>
      <AppBar position="static" className={classes.container}>
        <Toolbar>
          <Link to="/" className={classes.logo}>
            <img src={logo} alt="logo" />
          </Link>
          <nav className={classes.menu}>
            {MENU_ITEMS.map(item => (
              <Link to="/" className={classes.menuItem}>
                {item}
              </Link>
            ))}
          </nav>
          <Link to="/" className={classes.menuItemLogin}>
            <Button variant="outlined" className={classes.logInButton}>
              {LOGIN_BUTTON}
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Router>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Header;
