import  { useState } from 'react'
import {useAuth} from '../Context/AuthProvider'
import { Link } from 'react-router-dom';
import LoginDropdown from './LoginDropdown';
import Logout from '../Public/Logout';

const Header = () => { 
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const {auth}=useAuth();
  const { isAuthenticated,role,username} = auth;
  console.log(username);
   
  var cartShow=false;
     if(role==="CUSTOMER")
     cartShow=true;

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const hideMenu = () => {
    setIsMenuVisible(false);
  };

return (
  <header className='h-20 w-full bg-blue-500 px-5 py-2 flex-row justify-center items-center' >
      <nav className='flex h-full'> 
          {/* //& First Block */}
          <div className=' h-full w-2/4 flex px-3 pt-1 gap-2'>
              {/* //! Logo */}
              <div className=' h-full '>
                 <Link to={"/"}><img src="\src\Images\E-Commerece-logo.png" alt="icon" className='h-full w-32' /></Link>
              </div>
              {/* //! Search Bar */}
               <div className='border-2 stroke-orange-400 w-full flex items-center bg-slate-100 rounded-xl h-14 '>
                        <div className='w-10 flex items-center justify-center'>
                            <i className="fas fa-search  text-gray-500"></i>
                        </div>
                       <div>
                       <input type='input'
                          placeholder='Search for Products,Categories,etc...'
                          className='py-2 bg-slate-100 w-96 outline-none '/>
                        </div>
                        </div>
           </div>

          {/* //& Second Block */}
          <div className=' h-full w-2/4 flex px-7 justify-center items-center gap-10'>
                     {/* //!Login  */}
                    {isAuthenticated 
                    ?
                     <div className="group relative">
                            <button className="dropbtn group-hover:bg-gray-300"><i className="fa-solid fa-user"></i>hi, {username}</button>
                            <div className="dropdown-content opacity-1 hidden group-hover:opacity-100 group-hover:block absolute bg-white border rounded shadow-md mt-2 w-36">
                              <ul>
                                <li className="block px-4 py-2 hover:bg-gray-300"><div>MyProfile</div></li>
                                <li className="block px-4 py-2 hover:bg-gray-300"><div>Whishlist</div></li>
                                <li className="block px-4 py-2 hover:bg-gray-300"><div>Coupans</div></li>
                                <li className="block px-4 py-2 hover:bg-gray-300"><div>Orders</div></li>
                               {/* <Link to={"/logout"}> <li className="block px-4 py-2 hover:bg-gray-300"><div>Logout</div></li></Link> */}
                               <li className="block px-4 py-2 hover:bg-gray-300"><Logout/></li>
                              </ul>
                            </div>
                      </div>
                    :
                     <div className="group relative dropbtn group-hover:bg-gray-300">
                            <button><i className="fa-solid fa-user"></i>Login</button>
                            <div className="dropdown-content opacity-0 hidden group-hover:opacity-100 group-hover:block absolute bg-white border rounded shadow-md mt-2 w-auto">
                              <ul>
                                <li className="block px-4 py-2 hover:bg-gray-300"><Link to={"/login"}><div>Login</div></Link></li>
                                <li className="block px-4 py-2 hover:bg-gray-300"><Link to={"/customer/register"}><div>Register</div></Link></li>
                                <li className="block px-4 py-2 hover:bg-gray-300"><div>  </div></li>
                                <li className="block px-4 py-2 hover:bg-gray-300"><div>  </div></li>
                                <li className="block px-4 py-2 hover:bg-gray-300"><div>  </div></li>
                              </ul>
                            </div>
                      </div>
                     }  
                      {/* //!Become a Seller */}
                      <div className="group relative hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring">
                            <button className="dropbtn group-hover:bg-gray-300"><i className="fa-solid fa-store"></i>Become a Seller</button>
                            <div className="dropdown-content opacity-0 hidden group-hover:opacity-100 group-hover:block absolute bg-white border rounded shadow-md mt-2 w-full">
                              <ul>
                              <Link to={"/seller/register"}><li className="block px-4 py-2 hover:bg-gray-300"><div>Register</div></li></Link>
                              <Link to={"/seller-dashboard"}> <li className="block px-4 py-2 hover:bg-gray-300"><div>DashBoard</div></li></Link> 
                                <li className="block px-4 py-2 hover:bg-gray-300"><div>  </div></li>
                                <li className="block px-4 py-2 hover:bg-gray-300"><div>  </div></li>
                                <li className="block px-4 py-2 hover:bg-gray-300"><div>  </div></li>
                              </ul>
                            </div>
                      </div>

                      {/* //!Cart */}
                      <Link to={"/cart"}><div><i className="fa-sharp fa-solid fa-cart-shopping"></i>Cart</div></Link>
          </div>      
      </nav>
  </header>
);
}

export default Header



{/*  */}