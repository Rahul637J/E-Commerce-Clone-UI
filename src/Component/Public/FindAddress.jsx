import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import FindContact from './FindContact';

const FindAddress = () => {
    // const { auth } = useAuth();
    const [addressId, setAddressId] = useState(0);
    const [streetAddress, setStreetAddress] = useState('');
    const [streetAddressAdditional, setstreetAddressAdditional] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [pincode, setPincode] = useState();
    const [addressType, setAddressType] = useState('HOME');
    const [contact,setContact]=useState([])
    const {storeId} =useParams()
    console.log(storeId)
  
    useEffect(() => {
      const fetchStore = async () => {
        try {
          console.log("1")
          if(storeId!==0){
            console.log("2")
          const response = await axios.get(`http://localhost:8080/e-commerec/v1/api/address/${storeId}/store`);
          if (response.status === 201) {
            setAddressId(response.data.data.addressId)
            setStreetAddress(response.data.data.streetAddress)
            setstreetAddressAdditional(response.data.data.streetAddressAdditional)
            setCity(response.data.data.city)
            setState(response.data.data.state)
            setCountry(response.data.data.country)
            setPincode(response.data.data.pincode)
            setAddressType(response.data.data.addressType)
            setContact(response.data.data.contactList)
            console.log(response.status)
            console.log(response.data)
            console.log(contact)
            }
          }
        } catch (error) {
          console.error(error);
        }
      };

        fetchStore();

    }, [storeId]);
  
    const handleSaveChanges = async (event) => {
      event.preventDefault();
      const URL = `http://localhost:8080/e-commerec/v1/api/stores/${addressId}`;
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
        const updateResponse = await axios.put(URL, body, header);
        if (updateResponse.status === 200) {
            setAddressId(updateResponse.data.data.addressId)
            setStreetAddress(updateResponse.data.data.streetAddress)
            setstreetAddressAdditional(updateResponse.data.data.streetAddressAdditional)
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
      <div className='flex gap-10'>
        <div>
          <form className="border p-4 bg-red-400 w-96">
            <table>
              <tbody>
                <tr>
                  <td>
                    <label>StreerAddress:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      value={streetAddress}
                      onChange={(event) => setStreetAddress(event.target.value)}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>StreerAddress:</label>
                  </td>
                  <td>
                    <textarea
                      value={streetAddressAdditional}
                      onChange={(event) => setstreetAddressAdditional(event.target.value)}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>City:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      value={city}
                      onChange={(event) => setCity(event.target.value)}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>State:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      value={state}
                      onChange={(event) => setState(event.target.value)}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Country:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      value={country}
                      onChange={(event) => setCountry(event.target.value)}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Pincode:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      value={pincode}
                      onChange={(event) => setPincode(event.target.value)}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>AddressType:</label>
                  </td>
                  <td>
                  <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="contactType"
                        value={addressType}
                        onChange={(e) => setAddressType(e.target.value)}>
                        <option value="PRIMARY">HOME</option>
                        <option value="SECONDARY">STORE</option>
                    </select>
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
            </button >
            <br />
          </form>
          {/* <Link to={"/edit-store"}><button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full">Back</button></Link> */}

        </div>

        <div>
        {contact.length > 0 ? (
          contact.map(({ contactId }) => (
            <FindContact key={contactId} contactId={contactId} />
          ))
        )
             :
             <Link to={"/add-contact"}><button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full">Add Contact</button></Link>}   
        </div>

        </div>
    );
  };

export default FindAddress
