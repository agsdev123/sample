import { Button } from 'antd';
import React, { useState } from 'react';
import OtpInput from "react-otp-input";
import "./EnterOtpModal.scss";

const EnterOtpModal = ({setEnterOtp}) => {
    const [OTP, setOTP] = useState("");
    return (
        <>
            <div className='enter_otp_content'>
                <h3>Verify Your Otp</h3>
                <h4>Please Enter Your Otp To Complete the Login process</h4>
                {/* <h2>Email or phone</h2> */}
                <div className='otp_fields_content'>
                <OtpInput
                    className="OTPField"
                    value={OTP}
                    onChange={(otp) => setOTP(otp)}
                    numInputs={6}
                    separator={<span>&nbsp;</span>}
                />
                </div>
                <div className='submit_otp'>
                <Button
                 type='primary'
                 onClick={()=>setEnterOtp(false)}
                > Verify Otp</Button>
                </div>
            </div>
        </>
    )
}

export default EnterOtpModal