import React, { useState } from 'react'
import { useAuth } from '../Context/AuthProvider';
import { Link } from 'react-router-dom';

const LoginDropdown = () => {
    const{auth} = useAuth();
    const {username} = auth;
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const handleMouseEnter = () => {
      setIsDropdownOpen(true);
    };
  
    const name = (username) => {
      return username.split(/\d+/)[0];
    }
    const handleMouseLeave = () => {
      setIsDropdownOpen(false);
    };
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    {/* <div className='hover:text-orange-400'> */}
    <div className='absolute top-6 ml-9 text-xl '></div>
    <h3 ><i className="fa-solid fa-user"></i>  {name(username)}</h3>
    {/* {console.log(username)} */}
    {isDropdownOpen && (
      <div style={{ border: '1px solid black', padding: '10px' }} className='absolute bg-slate-300 flex items-start'>
        {/* Dropdown content goes here */}
        <ul>
          <li><Link to={"/account"}>Account
          </Link></li>
          <li><Link to={"/edit-profile"}>
            Edit-Profile</Link></li>
          {/* <li>Dropdown Item 3</li> */}
        </ul>
      </div>
    )}
    </div>
  )
}

export default LoginDropdown
