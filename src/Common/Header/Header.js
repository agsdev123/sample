import React, { useState } from "react";
import "./Header.scss";
import { useNavigate, NavLink } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer } from "antd";

const Header = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState('left');

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <div className="Header_contianer">
        {/* <div className="Header_contianer_web"> */}
        <div className="Header_logo">
          <img src={require("../../Assets/logo.png")} alt="IBultup" onClick={() =>navigate("/")}/>
        </div>
        <div className="Header_navbar">
          <NavLink to="/" exact className={({ isActive }) => (isActive ? "active" : "inactive")}>
            Home
          </NavLink>{" "}
          <NavLink to="/services" className={({ isActive }) => (isActive ? "active" : "inactive")}>
            Services
          </NavLink>{" "}
          <NavLink
            to="/partners"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Partners
          </NavLink>{" "}
          <NavLink to="/contactus" className={({ isActive }) => (isActive ? "active" : "inactive")}>
            Contact Us
          </NavLink>{" "}
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Blog
          </NavLink>
        </div>

        <div className="Header_contianer_mobile">
          <MenuOutlined onClick={showDrawer} />
          <Drawer
            // title="Basic Drawer"
            placement={placement}
            // closable={true}
            onClose={onClose}
            visible={visible}
            key={placement}
            width={"100%"}
          >
            <div className="nav_data">
            <NavLink to="/" exact className={({ isActive }) => (isActive ? "active" : "inactive")}>
              Home
            </NavLink><br/>
            <NavLink to="/services" className={({ isActive }) => (isActive ? "active" : "inactive")}>
              Services
            </NavLink><br/>
            <NavLink
              to="/partners"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Partners
            </NavLink><br/>
            <NavLink to="/contactus" className={({ isActive }) => (isActive ? "active" : "inactive")}>
              Contact Us
            </NavLink><br/>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Blog
            </NavLink>
            </div>
          </Drawer>
        </div>
      </div>
    </>
  );
};

export default Header;
