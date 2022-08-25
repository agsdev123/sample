import React from 'react'
import { Button, Input } from 'antd';
import "./PartnerWithUs.scss";
import { PaperClipOutlined } from '@ant-design/icons';


const { TextArea } = Input;

const PartnerWithUs = () => {
    return (
        <div>
            <div className='PartnerWithus_conatiner'>
                <h1>PARTNER WITH US</h1>
                <div className='PartnerWithus_intro'>
                    <div>
                        <h3>JOIN OUR SKILL POOL</h3>
                        <h4>If you are the one who believes in excellence using technology then we are partners!</h4>
                        <h4 className='intro_h4'>Be your own boss by partnering, start by applying here and attaching your resume.</h4>
                        <div className='PartnerWithus_services'>
                            <div className='PartnerWithus_services1'>
                                <h2>Project Manager - Operations</h2>
                                <h2>Project Manager - Quality Control</h2>
                                <h2>Project Manager - Execution</h2>
                            </div>
                            <div className='PartnerWithus_services1'>
                                <h2>Civil Engineer - Execution </h2>
                                <h2>Civil Engineer - Quality </h2>
                                <h2>Civil Engineer - Reinforcement</h2>
                                <h2>Civil Engineer - Surveying</h2>
                            </div>
                            <div className='PartnerWithus_services1'>
                                <h2>Junior Civil Engineer - Execution </h2>
                                <h2>Junior Civil Engineer - Quality </h2>
                                <h2>Junior  Civil Engineer - Reinforcement</h2>
                                <h2>Junior  Civil Engineer - Surveying</h2>
                            </div>

                            <div className='PartnerWithus_services1'>
                                <h2>Construction Superintendent - Mason</h2>
                                <h2>Electrical Engineer - Construction</h2>
                                <h2>Mechanical Engineer - Construction</h2>
                                <h2>Plumbing Engineer - Construction</h2>
                            </div>
                        </div>
                    </div>
                    <div className='PartnerWithus_register'>
                        <h3>APPLY NOW</h3>
                        <Input placeholder='Name' />
                        <Input placeholder='Phone' />
                        <Input placeholder='Email' />
                        <TextArea rows={5} placeholder="Message" maxLength={100} />
                        <div className='Register_link'>
                            <div className='attach_file'>
                                <PaperClipOutlined />
                                <h4>Attach Resume</h4>
                            </div>
                            <h5>Attachments <span>(0)</span></h5>
                        </div>
                        <Button>SUBMIT APPLICATION</Button>
                        <p>This site is protected by reCAPTCHA and the <span> Google Privacy Policy</span> and <span> Terms of Service</span> apply.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartnerWithUs