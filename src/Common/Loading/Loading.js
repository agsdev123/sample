import React from "react";
import { Spin } from "antd";
import "./Loading.scss";

const Loading = () => {
  return (
    <div className="loading-wrapper">
      <Spin className="loading-spin" />
    </div>
  );
};

export default Loading;
