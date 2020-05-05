import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';

import { BUTTON_LABELS } from '../../globals/constants';
import logo from '../../assets/images/logo/logo.png';
import ROUTES from '../../routes/Routes';
import { useStyles } from './Header.style';

function Header() {
  const classes = useStyles();

  return (
    <AppBar className={classes.container} position="static">
      <Toolbar>
        <Link to={ROUTES.home}>
          <img alt="logo" className={classes.logo} src={logo} />
        </Link>
        <nav className={classes.menu}>
          <Link className={classes.menuItem} to={ROUTES.create}>
            <Button className={classes.menuItemButton} variant="contained">
              {BUTTON_LABELS.headerCreateSurvey}
            </Button>
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
