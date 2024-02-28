import { useEffect } from 'react';
import { useAuth } from '../../Context/AuthProvider';
import { Link } from 'react-router-dom';
import axios from 'axios';

const EditStoreInfo = () => {
    return (
   <div className='border bg-slate-200 flex h-screen justify-center items-center'>
      {/* Sidebar Section */}
      <div className='relative  border stroke-lime-300 h-3/4 w-96 bg-blue-400 p-10 font-bold '>
      <h1 className='text-white text-lg'>Edit Store Info</h1>
          <h1 className='text-white text-lg'>You Add Your virtual store expand your market</h1>
          <img src="\src\Images\edit_store.jpeg" alt="image" className='absolute bottom-3 left-1/2 transform -translate-x-1/2 '/>
      </div>
  
      {/* Main Content Section */}
      <div className='h-3/4 w-1/3 flex-row items-center '>
          {/* //&Store Section */}
          <div className='h-1/3 w-full border  bg-white'>Add Your Store
          <ul className='flex justify-center items-center flex-col'>
            <Link to={"/add-store"} ><li>Add Store</li></Link>
            <Link to={"/find-store"}><li>Find Store</li></Link>
            <Link to={"/find-store"}><li>Edit Store</li></Link>
          </ul>
          </div>
  
          {/* //&Address Section */}
          <div className='h-1/3 w-full border  bg-white'>Add Address
          <ul className='flex justify-center items-center flex-col'>
           <Link to={"/add-address"}><li>Add Address</li></Link>
           <Link to={"/find-address"}><li>Find Address</li></Link>
           <Link to={"/find-address"}><li>Edit Address</li></Link>
          </ul>
          </div>
          {/* //&Contact Section */}
          <div className='h-1/3 w-full border  bg-white'>Add Contact
          <ul className='flex justify-center items-center flex-col'>
           <Link to={"/add-contact"}><li>Add Contact</li></Link>
           <Link to={"/find-contact"}><li>Find Contact</li></Link>
           <Link to={"/find-contact"}><li>Edit Contact</li></Link>
          </ul>
          <br /><br />
          <Link to={"/seller-dashboard"}><button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full">Back</button></Link>

          </div>

      </div>
  </div>
  
    );
};

export default EditStoreInfo;
