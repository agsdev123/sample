import React from 'react';
import "./TermsConditions.scss";
import Header from "../../Common/Header/Header";
import Footer from "../HomePage/Footer/Footer";


const TermsConditions = () => {
  return (
    <div>
      <div className='TermsConditions_container'>
        <Header />
        <div className='TermsConditions_content'>
          <h1>Terms and Conditions</h1>
          <div className='TermsConditions_data'>
            <h4>Your Terms and Conditions section is like a contract between you and your customers.
              You make information and services available to your customers, and your
              customers must follow your rules.</h4>
            <h4 className='data_h4'>Common items in a terms and conditions agreement allow you to:</h4>
            <ul>
              <li> Withdraw and cancel services, and make financial transactions.</li>
              <li>Manage customer expectations, such as liability for information errors or website downtime.</li>
              <li>Explain your copyright rules, such as attribution, adaptation, commercial or non-commercial use, etc.</li>
              <li>Set rules for user behavior, like forbidding unlawful behavior, hate speech, bullying, promotions,spam, etc.</li>
              <li>Disable user accounts.</li>
              <li>Write down any other terms or conditions that protect you or your audience.</li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default TermsConditions