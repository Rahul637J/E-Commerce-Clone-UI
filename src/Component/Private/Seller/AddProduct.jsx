import axios from 'axios';
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const AddProduct = () => {
    const[productName,setProductName]=useState("");
    const[productDescription,setProductDescritpion]=useState("");
    const[productPrice,setProductPrice]=useState(0.0);
    const[productId,setProductId]=useState();
    const {storeId}=useParams();
   
    

    const handleProductSave= async (event)=>{
        event.preventDefault();
        const URL=`http://localhost:8080/e-commerec/v1/api/products/${storeId}`;
        const body={
            productName:productName,
            productDescription:productDescription,
            productPrice:productPrice,
        }
        const header = {
            headers: {
              'Content-Type': 'application/json',
            },
            withCredentials: true,
          };
      
          try {
            const Response = await axios.post(URL, body, header);

            if(Response.status===200)
            {
                setProductId(Response.data.data.productId)
                window.alert("Product Saved")
            }
          }catch(error)
          {
            console.log(error)
          }
    }


  return (
    <div className='h-screen w-full bg-slate-200 flex '>
        <div className=' w-1/3 h-full bg-red-200'></div>
        <div className=' w-2/3 h-full flex justify-center items-center'>
            <form> 
                <table>
                    <tr>
                    <td></td>
                    <td colSpan="2" className='text-xl font-bold'>Add Product</td>
                    </tr>
                    <br />
                    <tr>
                        <td><label>Product Name :</label></td>
                        <td><input type="text" onChange={(event)=>{setProductName(event.target.value)}} className='h-10 w-60'/></td>
                    </tr>
                    <tr>
                        <td><label>Product Description :</label></td>
                        <td><textarea name="" id="" cols="22" rows="4" onChange={(event)=>{setProductDescritpion(event.target.value)}} className='h-10 w-60'></textarea></td>
                    </tr>
                    <tr>
                        <td><label>Product Price :</label></td>
                        <td><input type="tel" onChange={(event)=>{setProductPrice(event.target.value)}} className='h-10 w-60' /></td>
                    </tr>
                    {/* <tr>
                        <td><label>Availability Status</label></td>
                        <td><select name="" id="">
                            <option value="IN_STOCK">In Stock</option>
                            <option value="OUT_OF_STOCK">Out Of stock</option>
                            </select></td>
                    </tr> */}
                    {/* <tr>
                        <td><label>Product Name</label></td>
                        <td><input type="text" name="" id="" /></td>
                    </tr>
                    <tr>
                        <td><label>Product Name</label></td>
                        <td><input type="text" name="" id="" /></td>
                    </tr> */}
                    <br />
                    <tr className='flex-row items-center '><td colSpan="2">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                        type="submit"
                        onClick={handleProductSave}
                    >
                        Save
                    </button>
                    </td>
                    </tr>
                    <tr className='flex-row items-center '><td colSpan="2">
                    <Link to={`/about-store/${storeId}`}><button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full">Back</button></Link>

                    </td>
                    </tr>
                </table>
                 </form>
        </div>
      
    </div>
  )
}

export default AddProduct
