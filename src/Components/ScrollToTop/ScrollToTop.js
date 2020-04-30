import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function ScrollToTop({ children, history }) {
  useEffect(() => {
    const unListen = history.listen(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    });

    return () => {
      unListen();
    };
  }, [history]);

  return <>{children}</>;
}

ScrollToTop.propTypes = {
  children: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired
};

export default ScrollToTop;
