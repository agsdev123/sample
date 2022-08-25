import React from "react";
import { NavLink } from "react-router-dom";
import { CustomImage } from "../../../components";
import "./LinkCreation.scss";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

function LinkCreation({ menucontent }) {
  // const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const handleLogout = (val) => {
//     console.log("val", val);
//     if (val === "Logout") {
//       // localStorage.clear();
//       // navigate("/login");
//       // window.location.reload();
//       dispatch({ type: "logout" });
//     }
//   };
  return (
    <div className="linkcreation-wrapper">
      <NavLink to={menucontent.linkurl} className={(obj) => (obj.isActive ? "selected" : "")}>
        <div>
          <div>
            <CustomImage src={menucontent.imgpath} alt={menucontent.linkname} preview={false} />
          </div>
          <span>{menucontent.linkname}</span>
        </div>
      </NavLink>
    </div>
  );
}

export default LinkCreation;
