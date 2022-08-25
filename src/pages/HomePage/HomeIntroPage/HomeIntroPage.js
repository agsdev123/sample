import React from 'react';
import { Input, Select } from 'antd';
import {
    SearchOutlined
} from '@ant-design/icons';
import "./HomeIntroPage.scss";
import Header from '../../../Common/Header/Header';

const { Option } = Select;

const HomeIntroPage = () => {
    return (
        <div className='HomeIntroPage_continer'>
            <Header />
            <div className='HomeIntroPage_content'>
                <h3>DIGITAL CONSTRUCTION IS HERE</h3>
                <h2>Real Estate Construction Management</h2>
            </div>
            <div className='IntroPage_projects_data'>
                <h1>BUILD YOUR PROJECT IN 3 SIMPLE STEPS - RIGHT HERE</h1>
                <div className='projects_data_details'>
                    <div className='projects_data'>
                        <h3>BUILD YOUR DRAWING</h3>
                        <h4>iBuiltup offers innovative tool that enables you to carve out your project</h4>
                    </div>
                    <div className='projects_data'>
                        <h3>GET ESTIMATE</h3>
                        <h4>Project estimate is based out of the drawing you have built. Choose the best estimate!</h4>
                    </div>
                    <div className='projects_data1'>
                        <h3>PRINT</h3>
                        <h4>Get a print to review with your partners.
                            Baseline reference before you make it happen!
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeIntroPage