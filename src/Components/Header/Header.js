import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';

import logo from '../../assets/images/logo/logo.png';
import ROUTES from '../../Routes/Routes';
import { useStyles } from './Header.style';

const MENU_ITEM_CREATE_TEXT = 'Create survey';

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.container}>
      <Toolbar>
        <Link to={ROUTES.home}>
          <img src={logo} className={classes.logo} alt="logo" />
        </Link>
        <nav className={classes.menu}>
          <Link to={ROUTES.create} className={classes.menuItem}>
            <Button variant="contained" className={classes.menuItemButton}>
              {MENU_ITEM_CREATE_TEXT}
            </Button>
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
