import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductCard = ({ product, onImageUpload }) => {
    const [image, setImage] = useState(null);
  
    const handleImageChange = (e) => {
      const selectedImage = e.target.files[0];
      setImage(selectedImage);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const formData = new FormData();
      formData.append("image", image);
  
      try {
        const response = await axios.post(
          `http://localhost:8080/e-commerec/v1/api/products/${product.productId}/images`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(response.data.data.message);
        // If needed, you can notify the parent component that the image has been added
        onImageUpload();
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
  
    return (
      <div className="border border-gray-300 p-4 mb-4 rounded-md bg-green-300">
        <h3 className="text-xl font-semibold">{product.productName}</h3>
        <p className="text-gray-600">{product.productDescription}</p>
        <p className="text-blue-500 font-bold">Price: ${product.productPrice}</p>
        <br />
        <input type="file" onChange={handleImageChange} />
        <br />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full"
          onClick={handleSubmit}
        >
          Add Image
        </button>
      </div>
    );
  };
  
  const AddProductImage = () => {
    const [products, setProducts] = useState([]);
    const { storeId } = useParams();
  
    useEffect(() => {
      const fetchAllProducts = async () => {
        try {
          if (storeId !== 0) {
            const response = await axios.get(`http://localhost:8080/e-commerec/v1/api/products/${storeId}/fetchall`);
            console.log('API Response:', response);
            setProducts(response.data.data);
          }
        } catch (err) {
          console.error('Error fetching products:', err);
        }
      };
  
      fetchAllProducts();
    }, [storeId]);
  
    // Handle image upload completion, if needed
    const handleImageUpload = () => {
      // You can add logic here if needed
      console.log('Image uploaded');
    };
  
    return (
      <div className='h-screen w-full flex-row justify-center items-center'>
        <div>
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map(product => (
                <ProductCard key={product.productId} product={product} onImageUpload={handleImageUpload} />
              ))}
            </div>
          ) : (
            <p>No products available.</p>
          )}
        </div>
        <div>
        <Link to={`/about-store/${storeId}`}><button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full">Back</button></Link>

        </div>
      </div>
    );
  };
  
  export default AddProductImage;
