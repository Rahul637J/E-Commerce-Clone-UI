import { Link } from "react-router-dom"
import { useAuth } from "../../Context/AuthProvider";
import { useEffect, useState } from "react";
import axios from "axios";
import AddLogo from "./AddLogo";

const SellerDashBoard = () => {
  const [storeId, setStoreId] = useState(0);
  const [storeName, setStoreName] = useState('');
  const [storeAbout, setStoreAbout] = useState('');
  const [storeLogoUrl, setStoreLogoUrl] = useState('');
  const [logo, setLogo] = useState(null);

    const{auth}=useAuth();
    
    useEffect(() => {
        const fetchStore = async () => {
          try {


            const response = await axios.get(`http://localhost:8080/e-commerec/v1/api/stores/${auth.userId}`);
            if (response.status === 200) {
              setStoreId(response.data.data.storeId);
              setStoreName(response.data.data.storeName);
              setStoreAbout(response.data.data.storeAbout);
              setStoreLogoUrl(response.data.data.storeLogoLink);
              console.log(response.data)

              // console.log(auth.userId);
            }
          } catch (err) {
            console.error(err);
          }
        }
    
        if (auth.userId) {
          fetchStore();
        }
      }, [auth.userId]);

  return (
    <body className='bg-slate-200 max-h-fit w-full flex p-1 '>
      {/* //*SECTION 1 */}
    <section className='w-1/4 h-full border border-solid p-1 gap-3 '>
      {/* // ! MY STORE */}
    <div className='w-full h-auto border border-solid justify-center items-center bg-white rounded-md p-2 pr-2'>

    <h1 className="text-xl font-bold">My Store</h1>
  {
    auth.store===null?<Link to={"/add-store"} ><li>Add Store</li></Link>
    :
  <form>
      <table className="flex justify-center items-center p-3">
        <tbody>
          <tr>
            <img src={`http://localhost:8080/e-commerec/v1/api/stores/${storeId}/logo/images`} alt="Logo" className="h-10 w-10"/>
          </tr>
          <tr>
            <td>StoreName : </td>
            <td>{storeName}</td>
          </tr>
          <tr>
            <td>About Store :</td>
            <td>{storeAbout}</td>
          </tr>
          <tr>
            <td>
          <Link to={"/find-store"}><button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full">Edit Store</button></Link>
          </td>
          <td>
          <Link to={`/about-store/${storeId}`}><button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full">About Store</button></Link>
          </td>
          </tr>
        </tbody>
      </table>
  </form>
}
{
 <div>

  <AddLogo storeId={storeId}/>

          </div>
}
        </div>
        
<div className='w-full h-40 border border-solid bg-white rounded-md'>Gross Revenue</div>

{/* //!Icons */}
<div className='w-full h-40 border border-solid flex-row'>

  <ul className='flex w-full h-1/2 bg-white rounded-md items-center justify-center'> {/* Updated class for center alignment */}
    <li className='w-1/2 text-sm flex items-center justify-center flex-col'> {/* Updated class for center alignment */}
      <i className="fa-solid fa-grip fa-rotate-180 text-3xl"></i>
      View DashBoard
    </li>

    <li className='w-1/2 text-sm flex items-center justify-center flex-col'> {/* Updated class for center alignment */}
    <Link to={`/add-product/${storeId}`} className="flex justify-center items-center flex-col">
      <i className="fa-solid fa-arrow-down text-3xl"></i>
      Add Products
      </Link>
    </li>
  </ul>

  <ul className='w-full h-1/2 flex bg-white rounded-md items-center justify-center'> {/* Updated class for center alignment */}
    <li className='w-1/2 text-sm flex items-center justify-center flex-col'> {/* Updated class for center alignment */}
      <i className="fa-solid fa-people-carry-box text-3xl"></i>
      Manage Orders
    </li>
    <li className='w-1/2 text-sm flex items-center justify-center'> {/* Updated class for center alignment */}
    <Link to={`/edit-store/${storeId}`} className="flex justify-center items-center flex-col">  <i className="fa-solid fa-shop text-3xl"></i>
      Edit Store Info</Link>
    </li>
  </ul>
</div>
</section>
    {/* //*SECTION 2 */}
<section className='w-3/4 h-full border border-solid flex-row p-1 gap-1.2'>
  <div className='border border-solid w-full h-56 bg-white rounded-md '>Total Orders</div>
  <div className='border border-solid w-full h-32 bg-white rounded-md'>Product Listing</div>
  <div className='border border-solid w-full h-64 bg-white rounded-md'>Your Most Popular Orders</div>
</section>
      </body>
  )
}

export default SellerDashBoard
