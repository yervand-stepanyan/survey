import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';

import logo from '../../assets/images/logo/logo.png';
import ROUTES from '../../Routes/Routes';

const LOGIN_BUTTON_TEXT = 'Log in';
const MENU_ITEMS = [
  { name: 'Create Survey', route: ROUTES.create },
  { name: 'Take Survey', route: ROUTES.survey },
  { name: 'Results', route: ROUTES.results },
  { name: 'About', route: ROUTES.about },
  { name: 'Contacts', route: ROUTES.contacts }
];

function Header({ classes }) {
  return (
    <AppBar position="static" className={classes.container}>
      <Toolbar>
        <Link to={ROUTES.home} className={classes.logo}>
          <img src={logo} alt="logo" />
        </Link>
        <nav className={classes.menu}>
          {MENU_ITEMS.map(item => (
            <Link to={item.route} className={classes.menuItem} key={item.name}>
              {item.name}
            </Link>
          ))}
        </nav>
        <Link to={ROUTES.auth} className={classes.menuItemLogin}>
          <Button variant="outlined" className={classes.logInButton}>
            {LOGIN_BUTTON_TEXT}
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Header;
