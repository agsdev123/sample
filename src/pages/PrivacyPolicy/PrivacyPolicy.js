import React from 'react';
import Header from "../../Common/Header/Header";
import Footer from "../HomePage/Footer/Footer";
import "./PrivacyPolicy.scss";

const PrivacyPolicy = () => {
  return (
    <div>
      <div className='PrivacyPolicy_container'>
        <Header />
        <div className='PrivacyPolicy_content'>
            <h1>Privacy Policy</h1>
            <div className='privacy_cs'>
            <h4>Privacy Policy coming soon</h4>
            </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default PrivacyPolicy