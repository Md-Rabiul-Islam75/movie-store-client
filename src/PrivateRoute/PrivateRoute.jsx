import React, { useContext } from "react";
import { DataContext } from "../provider/DataProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(DataContext);
  const location = useLocation();
  //console.log(location);

  if (user && user?.email) {
    return children;
  }

  return <Navigate state={location.pathname} to={"/login"}></Navigate>;

};

export default PrivateRoute;
