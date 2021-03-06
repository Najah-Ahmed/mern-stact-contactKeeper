import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';
const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);
  const { isAuthenticated, logout, user } = authContext;
  const { clearContacts } = contactContext;
  const onLogout = () => {
    logout();
    clearContacts();
  };
  const authLink = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <a onClick={onLogout} href='#!'>
          <i className='fas fa-sign-out-alt'></i>
          <span className='hide-sm'> Logout </span>
        </a>
      </li>
    </Fragment>
  );
  const guessLink = (
    <Fragment>
      <li>
        <Link to='/register'>SignUp</Link>
      </li>
      <li>
        <Link to='/login'>Login </Link>
      </li>
    </Fragment>
  );
  return (
    <div className='navbar bg-primary '>
      <h1>
        <i className={icon} />
        {title}
      </h1>
      <ul>{isAuthenticated ? authLink : guessLink}</ul>
    </div>
  );
};
Navbar.propType = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};
Navbar.defaultProps = {
  title: '  Contact Keeper',
  icon: 'fas fa-id-card-alt'
};
export default Navbar;
