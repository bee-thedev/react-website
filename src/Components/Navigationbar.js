import React, { useState, useEffect } from 'react';
import { NavButton } from './NavButton';
import { Link } from 'react-router-dom';
import './Navigationbar.css';

function Navigationbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleTheClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <React.Fragment>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Bee-TheDev
            <i class="fab fa-forumbee"></i>
          </Link>
          <div className='menu-hamburger' onClick={handleTheClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'navbar-menu active' : 'navbar-menu'}>
            <li className='navbar-item'>
              <Link to='/' className='navbar-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='navbar-item'>
              <Link
                to='/services'
                className='navbar-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className='navbar-item'>
              <Link
                to='/products'
                className='navbar-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='navbar-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <NavButton buttonStyle='button--outline'>SIGN UP</NavButton>}
        </div>
      </nav>
    </React.Fragment>
  );
}


export default Navigationbar;
