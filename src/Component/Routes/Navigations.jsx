import Register from "../Public/Register";
import Login from "../Public/Login"
import VerifyOtp from "../Public/VerifyOtp";
import Home from "../Public/Home";
import Search from "../Public/Search"
import Account from "../Private/Common/Account"
import EditProfile from "../Private/Common/EditProfile"
import Cart from "../Private/Customer/Cart"
import Orders from "../Private/Customer/Orders"
import Wishlist from "../Private/Customer/Wishlist"
import SellerDashboard from "../Private/Seller/SellerDashBoard"
import SellerOrders from "../Private/Seller/SellerOrders"
import Store from "../Private/Seller/Store";
import EditStoreInfo from "../Private/Seller/EditStoreInfo";
import FindStore from "../Private/Seller/FindStore";
import FindAddress from "../Public/FindAddress";
import AddContact from "../Private/Common/AddContact";
import AddAddress from "../Private/Common/AddAddress";
import Logout from "../Public/Logout";
import FindContact from "../Public/FindContact";
import AboutStore from "../Private/Seller/AboutStore";
import AddProduct from "../Private/Seller/AddProduct";


const navs = [
  // ----------------------- BEFORE AUTH --------------------------- 
{
  path: "/seller/register",
  element: <Register role={"SELLER"}/>,
  requireAuth: false,
  isVisibleAfterAuth: false,
  role: "ALL",
},
{
  path: "/customer/register",
  element: <Register role={"CUSTOMER"}/>,
  requireAuth: false,
  isVisibleAfterAuth: false,
  role: "ALL",
},
{
  path: "/login",
  element: <Login />,
  requireAuth: false,
  isVisibleAfterAuth: false,
  role: "ALL",
},
{
  path: "/verify-otp",
  element: <VerifyOtp/>,
  requireAuth: false,
  isVisibleAfterAuth: false,
  role: "ALL",
},
  // -------------------------- BEFORE AND AFTER AUTH ----------------
{
  path: "/",
  element: <Home/>,
  requireAuth: false,
  isVisibleAfterAuth: true,
  role: "ALL",
},
{
  path: "/search",
  element: <Search/>,
  requireAuth: false,
  isVisibleAfterAuth: true,
  role: "ALL",
},
// ---------------------- COMMON AND AFTER AUTH ----------------------
{
  path: "/account",
  element: <Account/>,
  requireAuth: true,
  isVisibleAfterAuth: true,
  role: "ALL",
},
{
  path: "/edit-profile",
  element: <EditProfile/>,
  requireAuth: true,
  isVisibleAfterAuth: true,
  role: "ALL",
},
{
  path: "/add-address",
  element: <AddAddress/>,
  requireAuth: true,
  isVisibleAfterAuth: true,
  role: "ALL",
},
{
  path: "/find-address",
  element: <FindAddress/>,
  requireAuth: true,
  isVisibleAfterAuth: true,
  role: "ALL",
},
{
  path: "/add-contact",
  element: <AddContact/>,
  requireAuth: true,
  isVisibleAfterAuth: true,
  role: "ALL",
},
{
  path: "/find-contact",
  element: <FindContact/>,
  requireAuth: true,
  isVisibleAfterAuth: true,
  role: "ALL",
},
{
  path: "/logout",
  element: <Logout/>,
  requireAuth: true,
  isVisibleAfterAuth: true,
  role: "ALL",
},
// --------------------------- CUSTOMER --------------------------
{
  path: "/cart",
  element: <Cart/>,
  requireAuth: true,
  isVisibleAfterAuth: true,
  role: "CUSTOMER",
},
{
  path: "/orders",
  element: <Orders/>,
  requireAuth: true,
  isVisibleAfterAuth: true,
  role: "CUSTOMER",
},
{
  path: "/wishlist",
  element: <Wishlist/>,
  requireAuth: true,
  isVisibleAfterAuth: true,
  role: "CUSTOMER",
},
// ------------------------- SELLER ----------------------------
{
  path: "/seller-dashboard",
  element: <SellerDashboard/>,
  requireAuth: true,
  isVisibleAfterAuth: true,
  role: "SELLER",
},
{
  path: "/seller-orders",
  element: <SellerOrders/>,
  requireAuth: true,
  isVisibleAfterAuth: true,
  role: "SELLER",
},
{
  path: "/edit-store",
  element: <EditStoreInfo/>,
  requireAuth: true,
  isVisibleAfterAuth: true,
  role: "SELLER",
},
{
  path: "/add-store",
  element: <Store/>,
  requireAuth: true,
  isVisibleAfterAuth: true,
  role: "SELLER",
},
{
  path: "/find-store",
  element: <FindStore/>,
  requireAuth: true,
  isVisibleAfterAuth: true,
  role: "SELLER",
},
{
  path: "/about-store",
  element: <AboutStore/>,
  requireAuth: true,
  isVisibleAfterAuth: true,
  role: "SELLER",
},
{
  path: "/add-product",
  element: <AddProduct/>,
  requireAuth: true,
  isVisibleAfterAuth: true,
  role: "SELLER",
},
];

export default navs;

