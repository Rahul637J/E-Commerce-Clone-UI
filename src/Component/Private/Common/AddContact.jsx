import axios from 'axios';
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const AddContact = () => {
    const [contactName, setContactName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [priority, setPriority] = useState('PRIMARY'); // Default to PRIMARY
    const {addressId}=useParams();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log({ contactName, contactNumber, priority });
        const URL=`http://localhost:8080/e-commerec/v1/api/contacts/${addressId}`;
        const body = {

            contactName:contactName,
            contactNumber:contactNumber,
            priority:priority,
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
              setContactName(updateResponse.data.data.contactName);
              setContactNumber(updateResponse.data.data.contactNumber);
              setPriority(updateResponse.data.data.priority);
              alert("Store Data Updated Successfull")
            }
          } catch (error) {
            console.error(error);
          }
        };
        
    return (
        <div className="max-w-md mx-auto my-8">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                {/* Contact Name */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactName">
                        Contact Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="contactName"
                        type="text"
                        placeholder="Enter contact name"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                    />
                </div>

                {/* Contact Number */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactNumber">
                        Contact Number
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="contactNumber"
                        type="text"
                        placeholder="Enter contact number"
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                    />
                </div>

                {/* Contact Type */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactType">
                        Contact Type
                    </label>
                    <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="contactType"
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                    >
                        <option value="PRIMARY">PRIMARY</option>
                        <option value="SECONDARY">SECONDARY</option>
                    </select>
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                        type="submit"
                    >
                        Add Contact
                    </button>
                </div>
                <br />
                <Link to={"/edit-store"}><button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full">Back</button></Link>

            </form>
        </div>
    );
};

export default AddContact
