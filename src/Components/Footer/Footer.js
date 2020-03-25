import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../../assets/images/logo/logo.png';

function Footer(props) {
  const { classes } = props;

  const MENU_ITEMS = [
    {
      name: 'Create Survey',
      path: 'create-survey'
    },
    {
      name: 'Take Survey',
      path: 'take-survey'
    },
    {
      name: 'Results',
      path: 'results'
    },
    {
      name: 'About',
      path: 'about'
    },
    {
      name: 'Contacts',
      path: 'contacts'
    }
  ];

  return (
    <Router>
      <footer className={classes.container}>
        <div className={classes.footerTopPart}>
          <div className={classes.footerLogoContainer}>
            <Link to="/">
              <img src={logo} alt="logo-img" className={classes.footerLogo} />
            </Link>
          </div>
          <div className={classes.footerMenuItemsContainer}>
            {MENU_ITEMS.map(item => {
              return (
                <div className={classes.menuItemContainer}>
                  <Link
                    to={`/${item.path}`}
                    className={classes.menuItem}
                    key={item.name}
                  >
                    {item.name}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className={classes.footerBottomPart}>
          <div className={classes.footerBottom}>
            <div>copyright © 2020 survey</div>
            <div className={classes.madeBy}>made by ...</div>
          </div>
        </div>
      </footer>
    </Router>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Footer;
