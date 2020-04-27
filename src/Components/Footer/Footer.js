import React from 'react';
import { Link } from 'react-router-dom';

import {
  COPYRIGHT_INFO,
  MENU_ITEMS,
  WEBSITE_CREATOR
} from '../../Globals/variables';
import logo from '../../assets/images/logo/logo.png';
import ROUTES from '../../Routes/Routes';
import { useStyles } from './Footer.style';

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.container}>
      <div className={classes.logoAndMenuWrapper}>
        <div className={classes.logoSection}>
          <Link to={ROUTES.home}>
            <img src={logo} alt="logo" className={classes.logo} />
          </Link>
        </div>
        <div className={classes.menuSection}>
          {MENU_ITEMS.map(item => (
            <div className={classes.menu} key={item.name}>
              <Link to={item.route} className={classes.menuItem}>
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className={classes.infoWrapper}>
        <div className={classes.infoSection}>
          <div>
            <span>{COPYRIGHT_INFO}</span>
          </div>
          <div className={classes.line} />
          <div>
            <span>{WEBSITE_CREATOR}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
