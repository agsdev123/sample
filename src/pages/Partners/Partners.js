import React from 'react';
import Header from '../../Common/Header/Header';
import Footer from '../HomePage/Footer/Footer';
import "./Partners.scss"
// import PartnerWithus from './PartnerWithUs/PartnerWithUs';
import PartnerWithUs from './PartnerWithUs/PartnerWithUs';

const Partners = () => {
  return (
    <div>
        <div className='Partners_conatiner'>
            <Header/>
            <PartnerWithUs/>
            <Footer/>
        </div>
    </div>
  )
}

export default Partners