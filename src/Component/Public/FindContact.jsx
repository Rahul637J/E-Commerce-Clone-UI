import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const FindContact = ({contactId}) => {
    const [contactName, setContactName] = useState('');
    const [contactNumber, setContactNumber] = useState(0);
    const [priority, setPriority] = useState('PRIMARY');
    
    useEffect(() => {
      const fetchContact = async () => {
        try {
          if(contactId!=0){
            console.log("Entered")
          const response = await axios.get(`http://localhost:8080/e-commerec/v1/api/contacts/${contactId}`);
          console.log("Exit")
          if (response.status === 200) {
            // setContactd(response.data.data.storeId);
            setContactName(response.data.data.contactName);
            setContactNumber(response.data.data.contactNumber);
            setPriority(response.data.data.priority);
            console.log(response.data)
          }
        }
        } catch (err) {
          console.error(err);
        }
      };
        fetchContact();
    }, [contactId]);
  
    const handleUpdateChanges = async (event) => {
      event.preventDefault();
      const URL = `http://localhost:8080/e-commerec/v1/api/contacts/${contactId}`;
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
        const updateResponse = await axios.put(URL, body, header);
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
        <div>
          <form className="border p-4 bg-red-400 w-80">
            <table>
              <tbody>
                <tr>
                  <td>
                    <label>ContactName:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      value={contactName}
                      onChange={(event) => setContactName(event.target.value)}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>ContactNumber:</label>
                  </td>
                  <td>
                    <textarea
                      value={contactNumber}
                      onChange={(event) => setContactNumber(event.target.value)}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Priority:</label>
                  </td>
                  <td>
                  <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="contactType"
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}>
                        <option value="PRIMARY">PRIMARY</option>
                        <option value="SECONDARY">SECONDARY</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full"
              onClick={handleUpdateChanges}>
              Save Changes
            </button>
            <br />
          </form>
          <Link to={"/edit-store"}><button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full">Back</button></Link>
        </div>
    );
  };

export default FindContact
