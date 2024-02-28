import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Register = ({role}) => { const [userName,setUsername]=useState("");
const [password,setPassword]=useState("");
const navigate=useNavigate();

const handleRegistration= async (event)=>{
  event.preventDefault();

  //! Fire request to the Server using Axios
  const url="http://localhost:8080/e-commerec/v1/api/users";
  const body={
    email:userName,
    password:password,
    userRole:role
  };
  const header={
    headers:{
      "Content-Type":"application/json"
    },
    withCrendentials:true
    
  }
  try{
  const response= await axios.post(url,body,header)
  sessionStorage.setItem("email",userName)
  if(response.status===202)
  {
    console.log(response)
    alert("Otp Send Successfull")
    navigate("/verify-otp")
  }
else{
  alert("SomeThing went wrong Retry")
navigate("/{'response.data.data.role'}/register")
}
  }catch(error)
  {
    console.log(error)
  }
}

return (
<div className='border bg-slate-200 flex h-screen justify-center items-center'>
<div className='relative  border stroke-lime-300 h-3/4 w-80 bg-blue-400 p-10 font-bold shadow-slate-400' >
  <h3 className='text-white text-4xl' >Looks like you're new here!</h3><br/><br/>
  <h6 className='text-white text-xl'>Sign up with your mobile number to get started</h6>
  <img src="\src\Images\register_image.png" alt="image"  className='absolute bottom-3 left-1/2 transform -translate-x-1/2'/>
</div>
<div className='h-3/4 w-1/3 flex items-center'>
<form className="bg-white p-8 rounded-lg shadow-md  justify-center items-center h-full w-full">
<h2 className="text-2xl font-semibold mb-6">Register</h2>

<table className="w-full mb-6">
<tbody>
<tr>
  <td className="py-2 pr-4 text-right"><label >email:</label></td>
  <td><input type="text" onChange={(event)=> setUsername(event.target.value)} className="w-full p-2 border border-gray-300 rounded-md"/></td>
</tr>
<tr>
  <td className="py-2 pr-4 text-right"><label >Password:</label></td>
  <td><input type="text" onChange={(event)=> setPassword(event.target.value)} className="w-full p-2 border border-gray-300 rounded-md"/></td>
</tr>
{/* <tr>
  <td className="py-2 pr-4 text-right"><label for="password">Confirm Password:</label></td>
  <td><input type="text" onChange={(event)=> setPassword(event.target.value)}/></td>
</tr> */}
</tbody>
</table>
{/* <h6 className='text-xl'>By continuing, you agree to RJ Online Shopping's Terms of Use and Privacy Policy.</h6> */}

<br />

<button onClick={handleRegistration} className='bg-orange-500 w-full h-10 rounded-md text-white'>Submit</button>

<br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <h1 className='text-xl text-blue-700 '><Link to={"/login"}>Already have an account ? Click to login</Link></h1>

</form>

</div>
</div>
)
}

export default Register
