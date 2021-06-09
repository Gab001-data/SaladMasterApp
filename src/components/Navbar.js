import React, { useState } from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import { aboutMenu, eventMenu } from "./MenuItems";

function Navbar() {
  const navItemStyles={
    flexDirection: "column"
  }
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState({
      aboutDropdown: false,
      eventDropdown: false
  });

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const mobileMenuClick=(event)=>{
    const {name}=event.target;
    console.log(name);
    if(window.innerWidth<900){
      setDropdown(menu=>(
        {
            ...menu,
            [name]: !menu[name]
        }
        
    ));
    }
    console.log(dropdown.aboutDropdown);
  }

  const onMouseEnter = (event) => {
    const {name}=event.target;
    console.log(event.target);
      setDropdown(menu=>({
        ...menu,
        [name]: true
      }));
  };

  const onMouseLeave = () => {
        setDropdown({
            aboutDropdown: false,
            eventDropdown: false
          });
  };

  return (
    <>
      <nav>
        <div className='navbar'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            PL Transform
            <i class='fab fa-firstdraft' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/blog' className='nav-links' onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>
            <li
              className='nav-item'
              style={window.innerWidth<960? navItemStyles: null}
              id='aboutDropdown'
            >
              <Link
                to='/about'
                className='nav-links'
                onMouseEnter={window.innerWidth>960? onMouseEnter: null}
                onMouseLeave={window.innerWidth>960? onMouseLeave: null}
                onClick={mobileMenuClick}
                name='aboutDropdown'

              >
                About <i className='fas fa-caret-down' />
              </Link>
              {dropdown.aboutDropdown && <Dropdown menuItem={aboutMenu} click={closeMobileMenu} />}
            </li>
            <li className='nav-item'>
              <Link
                to='/contact-us'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
            <li 
            className='nav-item'
            style={window.innerWidth<960? navItemStyles: null} 
            onMouseLeave={onMouseLeave}
            id='eventDropdown'
            onClick={window.innerWidth>960? onMouseEnter: mobileMenuClick}
            >
              <Link
                to='/events'
                className='nav-links'
                name='eventDropdown'
              >
                Events <i className='fas fa-caret-down' />
              </Link>
              {dropdown.eventDropdown && <Dropdown menuItem={eventMenu} click={{closeMenu:closeMobileMenu,closeDropdown: mobileMenuClick}} />}
            </li>
            <li className='nav-item'>
              <Link to='/book-show' className='nav-links' onClick={closeMobileMenu}>
                Book Show
              </Link>
            </li>
            <li>
              <Link
                to='/signUp'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          <Button />

        </div>
        
      </nav>
    </>
  );
}

export default Navbar;