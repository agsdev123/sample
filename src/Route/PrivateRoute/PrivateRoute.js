import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
//   const userinfo = useSelector((state) => state.auth?.profileinfo);
//   const auth = userinfo?.token ? true : false;
// //   window.addEventListener("storage",()=>{
// //     window.location.reload(true);
// //  })
  const auth = true;
  return <>{auth ? <>{props.children}</> : <Navigate to="/login" />}</>;
};

export default PrivateRoute;
