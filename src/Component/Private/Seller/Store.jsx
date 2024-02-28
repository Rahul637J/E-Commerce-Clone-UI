// Store.js
import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../Context/AuthProvider';
import { Link, json } from 'react-router-dom';

const Store = () => {
    const[storeName,setStoreName]=useState("");
    const[aboutStore,setAboutStore]=useState("");
    const[url,setURL]=useState("");
    const[logo,setLogo]=useState(null)

    const {auth}=useAuth();
    const {userId}=auth;
    console.log(userId)

    const handleSubmit = async (event) => {
        event.preventDefault();

        const URL=`http://localhost:8080/e-commerec/v1/api/stores/${userId}`;
        const body={
            storeName:storeName,
            storeAbout:aboutStore,
            storeLogoLink:url
        }
        const header={
            headers: {
                "Content-Type": "application/json",
              },
              withCredentials: true,
        }
        try {
           const response=await axios.post(URL,body,header);
            console.log('Store added successfully');
            if(response.status===201)
            {
                const URL=`http://localhost:8080/e-commerec/v1/api/stores/${response.data.data.storeId}`;
                const storeData=await axios.get(URL,null,{ withCredentials : true,});
            }
        } catch (error) {
            console.error('Error adding store', error);
        }
    };

    return (
        <div className="max-w-2xl mx-auto mt-8 p-4">
            <form className="space-y-4">
                <div>
                    <label className="block text-gray-700">Name:</label>
                    <input
                        type="text"
                        name="name"
                        onChange={(event)=>setStoreName(event.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-gray-700">About:</label>
                    <textarea
                        name="about"
                        onChange={(event)=>setAboutStore(event.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-gray-700">URL:</label>
                    <input
                        type="text"
                        name="url"
                        onChange={(event)=>setURL(event.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"/>
                </div>

                <div>
                    <label className="block text-gray-700">URL:</label>
                    <input
                        type="file"
                        name="url"
                        onChange={(event) => setLogo(event.target.files[0])}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"/>
                </div>

                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full"
                >
                    Save
                </button>
                <br /><br />
                <Link to={"/edit-store"}><button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full">Back</button></Link>
            </form>
        </div>
    );
};

export default Store;
