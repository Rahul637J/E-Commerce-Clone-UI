import React, { useState } from 'react'
import { useAuth } from '../../Context/AuthProvider'
import { Link } from 'react-router-dom';
import axios from 'axios';

const AddAddress = () => {
    const {auth}=useAuth();
    // const {store}=auth
    // const {storeId}=store

    const [addressId, setAddressId] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [streetAddressAdditional, setStreetAddressAdditional] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [pincode, setPincode] = useState(0);
    const [addressType, setAddressType] = useState('HOME');

    const handleSubmit = async (event) => {
        // Handle form submission logic here
        event.preventDefault();
        // You can access the form values using the state variables (streetAddress, streetAddressAdditional, etc.)
        console.log({ streetAddress, streetAddressAdditional, city, state, country, pincode });

        const URL=`http://localhost:8080/e-commerec/v1/api/address/${storeId}`;
        const body = {
            streetAddress:streetAddress,
            streetAddressAdditional:streetAddressAdditional,
            city:city,
            state:state,
            country:country,
            pincode:pincode,
            addressTypa:pincode,
          };
          const header = {
            headers: {
              'Content-Type': 'application/json',
            },
            withCredentials: true,
          };
      
          try {
            const updateResponse = await axios.post(URL, body, header);
            if (updateResponse.status === 200) {
                setAddressId(updateResponse.data.data.addressId)
                setStreetAddress(updateResponse.data.data.streetAddress)
                setStreetAddressAdditional(updateResponse.data.data.streetAddressAdditional)
                setCity(updateResponse.data.data.city)
                setState(updateResponse.data.data.state)
                setCountry(updateResponse.data.data.country)
                setPincode(updateResponse.data.data.pincode)
                setAddressType(updateResponse.data.data.addressType)
              alert("Address Data Updated Successfull")
            }
          } catch (error) {
            console.error(error);
          }
    };

    return (
        <div className="max-w-md mx-auto my-8">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                {/* Street Address */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="streetAddress">
                        Street Address
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="streetAddress"
                        type="text"
                        placeholder="Enter street address"
                        value={streetAddress}
                        onChange={(e) => setStreetAddress(e.target.value)}
                    />
                </div>

                {/* Street Address Additional */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="streetAddressAdditional">
                        Additional Street Address
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="streetAddressAdditional"
                        type="text"
                        placeholder="Enter additional street address"
                        value={streetAddressAdditional}
                        onChange={(e) => setStreetAddressAdditional(e.target.value)}
                    />
                </div>

                {/* State */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="streetAddressAdditional">
                        City
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="streetAddressAdditional"
                        type="text"
                        placeholder="Enter City"
                        value={streetAddressAdditional}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>

                {/* State*/}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="streetAddressAdditional">
                        State
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="streetAddressAdditional"
                        type="text"
                        placeholder="Enter State"
                        value={streetAddressAdditional}
                        onChange={(e) => setState(e.target.value)}
                    />
                </div>

                   {/* Country */}
                   <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="streetAddressAdditional">
                        Country
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="streetAddressAdditional"
                        type="text"
                        placeholder="Enter Country"
                        value={streetAddressAdditional}
                        onChange={(e) => setCountry(e.target.value)}
                    />
                </div>

                   {/* Pincode*/}
                   <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="streetAddressAdditional">
                        Pincode
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="streetAddressAdditional"
                        type="text"
                        placeholder="Enter Pincode"
                        value={streetAddressAdditional}
                        onChange={(e) => setPincode(e.target.value)}
                    />
                </div>

                    {/* Address Type */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="addressType">
                        Address Type
                    </label>
                    <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="addressType"
                        onChange={(e) => setAddressType(e.target.value)}
                    >
                        <option value="HOME">Home</option>
                        <option value="STORE">Store</option>
                    </select>
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Add Address
                    </button>
                </div>
                <br />
                <Link to={"/edit-store"}><button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full">Back</button></Link>
            </form>
        </div>
    );
};

export default AddAddress;

