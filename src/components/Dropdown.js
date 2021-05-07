import React, { useState } from 'react';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown(props) {
  const dropdownStyles={
  width: "100%",
  position: "static",
  listStyle: "none",
  textAlign: "start",
  paddingLeft: 0
  }
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
        style={window.innerWidth<960? dropdownStyles: null}
      >
        {props.menuItem.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => {        //close both mobile menu and dropdown when in mobile view.
                  if(window.innerWidth<960){
                    handleClick();
                    props.click.closeDropdown();
                    props.click.closeMenu();
                  }else{
                    handleClick();
                  }
                  
                  }}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;