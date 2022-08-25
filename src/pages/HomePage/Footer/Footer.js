import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Footer.scss";



const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className='Footer_container'>
            <div className='Footer_nav'>
                <h4 onClick={() => navigate("/")}>HOME</h4>
                <h4 onClick={() => navigate("/privacy")}>PRIVACY POLICY</h4>
                <h4 onClick={() => navigate("/termsconditions")}>TERMS AND CONDITIONS</h4>
            </div>
            <h3>IBuiltup real estate and construction management</h3>
            <div className='Footer_rights'>
                <h5>Copyright © 2022 iBuiltup - All Rights Reserved.</h5>
                {/* <h5>Powered by <span>GoDaddy</span></h5> */}
            </div>
        </div>
    )
}

export default Footer