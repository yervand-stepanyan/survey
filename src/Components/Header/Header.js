import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';

import logo from '../../assets/images/logo/logo.png';
import ROUTES from '../../Routes/Routes';
import { useStyles } from './Header.style';

const MENU_ITEMS = [
  { name: 'Create Survey', route: ROUTES.create },
  { name: 'Contacts', route: ROUTES.contacts }
];

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
      </Toolbar>
    </AppBar>
  );
}

export default Header;
