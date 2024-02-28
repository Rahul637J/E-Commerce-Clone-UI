import React, { useEffect, useState } from 'react';
import { useAuth } from '../../Context/AuthProvider';
import axios from 'axios';
import { Link } from 'react-router-dom';

const FindStore = () => {
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

  localStorage.setItem("storeId",storeId);

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
        alert("Store Data Updated Successfull")
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-slate-200">
      <div>
        <form className="border p-4 bg-red-400">
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
            onClick={handleSaveChanges}
          >
            Save Changes
          </button>
          <br />

        </form>
        <Link to={"/edit-store"}><button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full">Back</button></Link>

      </div>
    </div>
  );
};

export default FindStore;
