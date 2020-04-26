import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';

import logo from '../../assets/images/logo/logo.png';
import { MENU_ITEMS } from '../../Globals/variables';
import ROUTES from '../../Routes/Routes';
import { useStyles } from './Header.style';

const LOGIN_BUTTON_TEXT = 'Log in';

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.container}>
      <Toolbar>
        <Link to={ROUTES.home}>
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

export default Header;
