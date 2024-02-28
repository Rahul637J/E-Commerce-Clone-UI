import  { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {useAuth} from '../Context/AuthProvider'
import axios from 'axios';

const rafce = () => {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {auth,setAuth}=useAuth();

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log(username);
    console.log(password);

    //! Fire request to the Server using Axios
    const URL = "http://localhost:8080/e-commerec/v1/api/login";
    const body = {
      email: username,
      password: password,
    };
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    try {
      const response = await axios.post(URL, body, header);
      if (response.status === 200) {
        alert("logged in successfully");
        console.log(response);
        const user = {
          userId: response.data.data.userId,
          username: response.data.data.username,
          role: response.data.data.role,
          isAuthenticated: response.data.data.authenticated,
          accessExpiration: response.data.data.accessExpiration,
          refreshExpiration: response.data.data.refreshExpiration,
          store:response.data.data.store
        };
        console.log(user.store)
        localStorage.setItem("user", JSON.stringify(user));
        setAuth(user);
        console.log(auth);
        navigate("/");
      }
      
      else
      navigate("/")
    } catch (error) {
      console.log(error);
      navigate("/")
    }
  };
  
  return (
    <div className='border bg-slate-200 flex h-screen justify-center items-center'>
      <div className='relative  border stroke-lime-300 h-3/4 w-80 bg-blue-400 p-10 font-bold '>
        <h3 className='text-white size-20 text-4xl'>Login</h3>
        <h6 className='text-white absolute bottom-42 text-xl'>Get access to your Orders, Wishlist and Recommendations</h6>
        <img src="\src\Images\login_base.png" alt="image"  className="absolute bottom-3 left-1/2 transform -translate-x-1/2" />
      </div>
      <div className='h-3/4 w-1/3 flex items-center '>
      <form className="bg-white p-8 rounded-lg shadow-md  justify-center items-center h-full w-full">
      <table className="w-full mb-6 flex-row justify-center items-center" >
        <tbody>
      <tr>
        <td></td>
        <td> <h2 className="text-2xl font-semibold mb-6">Login</h2></td>
        </tr>
      <tr>
        <td className="py-2 pr-4 text-right"><label >Username:</label></td>
        <td> <input type="text" onChange={(event)=> setUsername(event.target.value)} className="w-full p-2 border border-gray-300 rounded-md"/></td>
      </tr>
      <tr>
        <td className="py-2 pr-4 text-right"><label >Password:</label></td>
        <td> <input type="text" onChange={(event)=> setPassword(event.target.value)} className="w-full p-2 border border-gray-300 rounded-md"/></td>
      </tr>
      <br />
      <tr><td></td>
      <td> <button type="submit" onClick={handleLogin} className="bg-orange-500 text-white px-4 py-2 rounded-md w-full">Login</button></td>

      </tr>
      </tbody>
    </table>

   

    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <h1 className='text-xl text-blue-700 '><Link to={"/customer/register"}>New to RJ Online Shopping ? create the account </Link></h1>
  </form>
  
  </div>
  </div>
  )
}

export default rafce
