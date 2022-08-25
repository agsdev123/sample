import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


const PublicRoute = (props) => {
//   const userinfo = useSelector((state) => state.auth?.profileinfo);
//   console.log(userinfo);
//   //  window.addEventListener("storage",()=>{
//   //     window.location.reload(true);
//   //  })
  const auth = true;
  // const auth = true;
  return <>{auth ? props.children : <Navigate to="/" />}</>;
};

export default PublicRoute;