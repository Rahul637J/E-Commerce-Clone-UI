import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';  // Import Link component
import axios from 'axios';
import FindAddress from '/src/Component/Public/FindAddress.jsx'; // Import FindAddress component
import { useAuth } from '/src/Component/Context/AuthProvider.jsx';
import FindStore from './FindStore';
import AddAddress from '../Common/AddAddress';

const AboutStore = () => {
  const { auth } = useAuth();
//   const [storeId, setStoreId] = useState(0);
  const [storeName, setStoreName] = useState('');
  const [storeAbout, setStoreAbout] = useState('');
  const [storeLogoUrl, setStoreLogoUrl] = useState('');
  const [address,setAddress]=useState({});
  const {storeId}=useParams();
  const [addressId,setAddressId]=useState(0);

  const [updateStore,setUpdateStore]=useState(false);
  const [findAddress,setFindAddress]=useState(false);
  const [findContact,setFindContact]=useState(false);

//    var updateStore =false;

  useEffect(() => {
    const fetchStore = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/e-commerec/v1/api/stores/${auth.userId}`);
        if (response.status === 200) {
        //   setStoreId(response.data.data.storeId);
          setStoreName(response.data.data.storeName);
          setStoreAbout(response.data.data.storeAbout);
          setStoreLogoUrl(response.data.data.storeLogoLink);
          setAddress(response.data.data.address)
          setAddressId(response.data.data.address.addressId)
          console.log(addressId)
          console.log(response.data)
        }
      } catch (err) {
        console.error(err);
      }
    };

    if (auth.userId) {
      fetchStore();
    }
  }, [auth.userId]);

  const handleClick = (event) => {
    event.preventDefault();
    setUpdateStore(true);
  };

  const handleFindAddress=(event)=>{
    event.preventDefault();
    if(Object.keys(address).length!==0)
    {
      setFindAddress(true)
    }
    };

    // const handleFindContact=(event)=>{
    //     event.preventDefault();
    //     if(Object.keys(address).length!==0)
    //     {
    //       setFindContact(true)
    //     }
    //     };
  
  return (
    // !First Div
    <div className='h-screen w-full  flex '>
        <div className='h-full w-80 flex-row  p-5 border-8 border-green-400 rounded-e-xl'>
            <div className='h-30 w-full'>
                <img src={`http://localhost:8080/e-commerec/v1/api/stores/${storeId}/logo/images`}  alt="logo" className='h-40 w-full'/>
            </div>
            <div className='h-96 w-full '>
                <table className='w-full'>
                <thead className='font-bold  text-center w-full' colSpan="1">{storeName}</thead>
                    <br />
                    <tr>
                        <td className='font-semibold'>About :</td>
                    </tr>
                    <tr>
                    <td colSpan="2">{storeAbout}</td>
                    </tr>
                    <br />
                    {/* //& Update Store */}
                    <tr>
                        <td colSpan="2"> 
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full" onClick={handleClick}>Update Store</button>
                   </td>
                    </tr>
                    <br />

                    { Object.keys(address).length === 0 ?
                     <tr>
                     <td colSpan="2"> 
                    <Link to={"/add-address"}><button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full" onClick={handleClick}>Add Address</button></Link> 
                     </td>
                     </tr>
                    :
                    <tr>
                        <td colSpan="2"> 
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full" onClick={handleFindAddress}>Get Address</button>
                        </td>
                    </tr>
                    }
                    <br />
                    { Object.keys(address).length === 0 ?
                     <tr>
                     <td colSpan="2"> 
                    <Link to={`/add-contact/${addressId}`}><button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full" onClick={handleClick}>Add Contact</button></Link> 
                     </td>
                     </tr>
                    :
                    <tr>
                        <td colSpan="2"> 
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full" onClick={handleClick}>Get Contact</button>
                        </td>
                    </tr>
                    }
                    <br />
                    <tr>
                        <td colSpan="2"> 
                    <Link to={`/add-product/${storeId}`}><button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full">Add Product</button></Link> 
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <td colSpan="2"> 
                    <Link to={`/addproduct-image/${storeId}`}>   <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full">Add Product Image</button></Link> 
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <td colSpan="2"> 
                        <Link to={"/seller-dashboard"} className=''>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full">Back</button>
                        </Link> 
                        </td>
                    </tr>
                </table>
            </div>
{/* 
        <Link to={"/seller-dashboard"} className=''>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full">Back</button>
          </Link> */}
        </div>
        <br />
        <br />
        <div>
            
        </div>

     {/* //!Second Div */}
      <div className="h-screen w-full bg-slate-200 flex p-10 gap-10">
        <div className=' h-80 w-80'>
            {updateStore ? <FindStore/> : console.log(false)}
        </div>
        <br />
        { findAddress ?
         <div className=' h-auto w-auto'>
          <FindAddress/> 
        </div>
        :
        // <div className=' h-auto w-auto'>
        // <FindAddress/>
        // </div>
        null
        }
        <div></div>
        
      </div>
    </div>
  );
};

export default AboutStore;


{/* <FindStore/> */}
{/* <Link to={`/update-store/${storeId}`} className=''></Link> */}