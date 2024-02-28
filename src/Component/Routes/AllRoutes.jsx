import React from 'react'
import App from "../../App"
import { Route, Routes } from 'react-router-dom';
import { useAuth } from '../Context/AuthProvider';
import navs from './Navigations';


const AllRoutes = () => {
  const { auth } = useAuth();
  const { role, isAuthenticated } = auth;
  return (
    <Routes>
      <Route path={"/"} element={<App />}>
        {navs.map((nav, i) => {
          if (isAuthenticated) {
            if (nav.isVisibleAfterAuth) {
              if (nav.role === role || nav.role === "ALL") {
                console.log(nav);
                return <Route key={i} path={nav.path} element={nav.element} />;
              }
            }
          } else {
            if (!nav.requireAuth && nav.role === "ALL") {
              console.log(nav);
              return <Route key={i} path={nav.path} element={nav.element} />;
            }
          }
        })}
      </Route>
    </Routes>
  );
}

export default AllRoutes
