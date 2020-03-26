import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import logo from '../../assets/images/logo/logo.png';
import ROUTES from '../../Routes/Routes';

function Footer(props) {
  const { classes } = props;

  const MENU_ITEMS = [
    { name: 'Create Survey', route: ROUTES.create },
    { name: 'Take Survey', route: ROUTES.survey },
    { name: 'Results', route: ROUTES.results },
    { name: 'About', route: ROUTES.about },
    { name: 'Contacts', route: ROUTES.contacts }
  ];

  return (
    <div>
      <footer className={classes.container}>
        <div className={classes.footerTopPart}>
          <div className={classes.footerLogoContainer}>
            <Link to={ROUTES.home}>
              <img src={logo} alt="logo-img" className={classes.footerLogo} />
            </Link>
          </div>
          <div className={classes.footerMenuItemsContainer}>
            {MENU_ITEMS.map(item => (
              <div className={classes.menuItemContainer} key={item.name}>
                <Link to={item.route} className={classes.menuItem}>
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.footerBottomPart}>
          <div className={classes.footerBottom}>
            <div>Copyright © 2020 Survey</div>
            <div className={classes.madeBy}>Made by ...</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Footer;
