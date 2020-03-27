import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import logo from '../../assets/images/logo/logo.png';
import ROUTES from '../../Routes/Routes';

const COPY_INFO = 'Copyright © 2020 Survey';
const MENU_ITEMS = [
  { name: 'Create Survey', route: ROUTES.create },
  { name: 'Take Survey', route: ROUTES.survey },
  { name: 'Results', route: ROUTES.results },
  { name: 'About', route: ROUTES.about },
  { name: 'Contacts', route: ROUTES.contacts }
];
const WEBSITE_CREATOR = 'Website by ...';

function Footer({ classes }) {
  return (
    <footer className={classes.container}>
      <div className={classes.logoAndMenuWrapper}>
        <div className={classes.logoSection}>
          <Link to={ROUTES.home}>
            <img src={logo} alt="logo" />
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
            <span>{COPY_INFO}</span>
          </div>
          <div className={classes.websiteCreator}>
            <span>{WEBSITE_CREATOR}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Footer;
