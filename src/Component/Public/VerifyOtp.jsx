import axios from 'axios';
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

const VerifyOtp = () => {
  const [otp,setOtp]=useState("");
  const navigate=useNavigate();

  const generateOtp= async()=>{
const URL="http://localhost:8080/e-commerec/v1/api/users/verifyotp";
const header={
  headers:{"Content-Type":"application/json",
}

,withCredentials:true
}
const body={
  email:sessionStorage.getItem("email"),
  otp:otp
}

    try{
      const response=await axios.post(URL,body,header)
      console.log(await axios.post(URL,body,header))
      sessionStorage.removeItem("email")
      if(response.status===201)
      navigate("/login")
    }catch(error)
    
      {
        console.log(error)
      }
  }

  return (
    <div className='border bg-slate-200 flex h-screen justify-center items-center'>
    <div className='relative border stroke-lime-300 h-3/4 w-80 bg-blue-400 p-10 font-bold ' >
      <h3 className='text-white font-semibold text-2xl'>Verify User Account to expore !!!!!</h3>
      <h6 className='text-white font-semibold  absolute bottom-80 text-xl'>Get access to your Orders, Wishlist and Recommendations</h6>
      <img src="\src\Images\verify_otp.png" alt="image" className='absolute bottom-3 left-0'/>
    </div>
    <div className='h-3/4 w-1/3 flex-row pt-10 px-10 border2 bg-white'>
    
    <input type="text" onChange={(event)=>setOtp(event.target.value)} placeholder='Enter the email to verify your OTP' className='outline-none w-full 
     focus:' />
    <br /><br />
    <h3>By continuing, you agree to RJ Online Shopping's Terms of Use and Privacy Policy.</h3>
    <br /><br />
    <button type="submit" onClick={generateOtp}  className="bg-orange-500 text-white px-4 py-2 rounded-md w-full">Verify Account</button>
    <br /><br />
    <button type="submit" className="bg-white border border-gray-400 shadow-xl px-4 py-2 rounded-md w-full"><Link to={"/login"}> Existing User? Login </Link></button>

   </div>
</div>
  )
}

export default VerifyOtp
