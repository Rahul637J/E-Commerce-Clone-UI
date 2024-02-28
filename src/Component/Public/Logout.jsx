import { useAuth } from '../Context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Logout = () => {
  let navigate = useNavigate();
  const URL = "http://localhost:8080/e-commerec/v1/api/logout";
  const { setAuth } = useAuth();
  const handleLogout = async () => {
    try {
      console.log("log out");
      const response = await axios.post(URL);
      console.log(response);
      if (response.status === 202) {
        // Update the logic here if needed
        setAuth({
          userId: "",
          username: "",
          role: "ALL",
          isAuthenticated: false,
          accessExpiration: "",
          refreshExpiration: "",
        });
        localStorage.removeItem("user");
        console.log("Logged out -- from Header Component");
      }
      console.log("Logged OUT");
      navigate("/");
    } catch (error) {
      console.log(error.response.data.rootcause);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;

