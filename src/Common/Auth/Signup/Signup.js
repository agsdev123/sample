import { Button, Col, Divider, Form, Input, Row } from "antd";
import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SignupImage from "../../../Assets/sign up.svg";
import { userSignup } from "../../../store/Login/LoginSlice";
import Header from "../../Header/Header";
import "./Signup.scss";

const { Password } = Input;

const SignupPage = () => {

  const [form] = Form.useForm();
  const [enterOtp, setEnterOtp] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userinfo = useSelector((state) => state.auth);
  const { loading } = userinfo ?? {};
  const Rules = {
    email: [
      {
        required: true,
        message: "Email address can't be blank",
      },
      { whitespace: true, message: "Remember to fill in the title" },
      {
        pattern: new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
        message: "Plese enter valid email",
      },
    ],
    name: [
      {
        required: true,
        message: "Name can't be blank",
      },
    ],
    phone: [
      {
        required: true,
        message: "Phone number can't be blank",
      },
    ],
  };

  const handleOnFinish = async (values) => {
    const data = {
      fullName: values.name,
      email: values.email,
      phone: values.phone,
      countryCode: "+91",
    };
    dispatch(userSignup({ data, navigate }));
  };


  return (
    <>
      <div className="signUp_container">
        <Header />
        <div className="signup_content">
          <Row>
            <Col span={12}>
              <img src={SignupImage} />
            </Col>
            <Col span={12}>
              <div className="signup_inputFields">
                <h1>Signup</h1>
                <Divider />
                <Form form={form} onFinish={handleOnFinish}>
                  <Form.Item name="name" rules={Rules.name}>
                    <Input placeholder="Enter Name" />
                  </Form.Item>
                  <Form.Item name="email" rules={Rules.email}>
                    <Input placeholder="Enter email" />
                  </Form.Item>
                  <Form.Item name="phone" rules={Rules.phone}>
                    <Input placeholder="Enter Phone" />
                  </Form.Item>
                  <div className="checkbox_content">
                    <Form.Item>
                      <Button type="primary" htmlType="submit" loading={loading}>
                        Signup
                      </Button>
                    </Form.Item>
                  </div>
                </Form>
              </div>
              <div className="signup_Signup_tag">
                <h4>
                  Do you  have an acoount ?
                  <span onClick={() => navigate("/login")}> Login</span>
                </h4>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      {/* </Spin> */}
    </>
  );
};

export default SignupPage;
