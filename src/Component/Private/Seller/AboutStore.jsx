import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // Import Link component
import axios from 'axios';
import FindAddress from '/src/Component/Public/FindAddress.jsx'; // Import FindAddress component
import { useAuth } from '/src/Component/Context/AuthProvider.jsx';

const AboutStore = () => {
  const { auth } = useAuth();
  const [storeId, setStoreId] = useState(0);
  const [storeName, setStoreName] = useState('');
  const [storeAbout, setStoreAbout] = useState('');
  const [storeLogoUrl, setStoreLogoUrl] = useState('');

  useEffect(() => {
    const fetchStore = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/e-commerec/v1/api/stores/${auth.userId}`);
        if (response.status === 200) {
          setStoreId(response.data.data.storeId);
          setStoreName(response.data.data.storeName);
          setStoreAbout(response.data.data.storeAbout);
          setStoreLogoUrl(response.data.data.storeLogoLink);
        }
      } catch (err) {
        console.error(err);
      }
    };

    if (auth.userId) {
      fetchStore();
    }
  }, [auth.userId]);

  const handleSaveChanges = async (event) => {
    event.preventDefault();
    const URL = `http://localhost:8080/e-commerec/v1/api/stores/${storeId}`;
    const body = {
      storeName: storeName,
      storeAbout: storeAbout,
      storeLogoLink: storeLogoUrl,
    };
    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    };

    try {
      const updateResponse = await axios.put(URL, body, header);
      if (updateResponse.status === 200) {
        setStoreName(updateResponse.data.data.storeName);
        setStoreAbout(updateResponse.data.data.storeAbout);
        setStoreLogoUrl(updateResponse.data.data.storeLogoLink);
        alert("Store Data Updated Successfully");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='h-screen w-full  flex gap-10 '>
        <div className='h-full w-80 bg-slate-200'>
        <Link to={"/seller-dashboard"}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full">Back</button>
          </Link>
        </div>
      <div className="h-80 w-60 bg flex justify-center items-center">
        <div>
          <form className="border p-4 bg-red-400 w-80">
            <table>
              <tbody>
                <tr>
                  <td>
                    <label>StoreName:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      value={storeName}
                      onChange={(event) => setStoreName(event.target.value)}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>AboutStore:</label>
                  </td>
                  <td>
                    <textarea
                      value={storeAbout}
                      onChange={(event) => setStoreAbout(event.target.value)}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>StoreLogoUrl:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      onChange={(event) => setStoreLogoUrl(event.target.value)}
                      value={storeLogoUrl}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full"
              onClick={handleSaveChanges} // Fixed function name here
            >
              Save Changes
            </button>
            <br />
          </form>
          <Link to={"/edit-store"}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full">Back</button>
          </Link>
        </div>
      </div>
      <div className='h-80 w-60 bg-slate-400'>
        {storeId !== null ? 
          <FindAddress storeId={storeId} />
          :
          <Link to={"/add-address"}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full">Add Address</button>
          </Link>}
      </div>
    </div>
  );
};

export default AboutStore;
