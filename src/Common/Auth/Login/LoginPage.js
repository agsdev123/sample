import React, { useState } from "react";
import { Form, Input, Checkbox, Row, Col, Divider, Spin, Button, Modal } from "antd";
import "./LoginPage.scss";
import { useNavigate } from "react-router-dom";
import Header from "../../Header/Header";
import LoginImage from "../../../Assets/loginImg.svg";
// import EnterOtpModal from "./EnterOtpModal/EnterOtpModal";
import { userLogin } from "../../../store/Login/LoginSlice";
import { useDispatch,useSelector } from "react-redux";

const { Password } = Input;

const LoginPage = () => {
  const [form] = Form.useForm();
  const [enterOtp, setEnterOtp] = useState(false);
  const [validatelogin, setValidatelogin] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userinfo = useSelector((state) => state.auth);
  const { loading } = userinfo ?? {};
  const Rules = {
    login: [
      {
        required: true,
        message: "Email or PhoneNumber  Can't be blank",
      },
      { whitespace: true, message: "Remember to fill in the title" },
      {
        pattern:
          validatelogin === "Email"
            ? new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
            : false,
        message: validatelogin === "Email" && "please enter valid email",
      },
      {
        min: validatelogin === "Phone" && 10,
        message: "phone Name should be at least 10 characters",
      },
    ],
  };
  const handleOnFinish = async (values) => {
    const data = {
      login: validatelogin === "Phone"? Number(values.login):values.login,
    };
    console.log("data",data)
    dispatch(userLogin({ data, navigate }));
  };

  const validateEmail = (value) => {
    console.log("validatelogin1", value);
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let regExp = /^\d*$/;
    let sttr = new RegExp("^([a-z0-9])$");
    console.log("value.match(regExp)", value.match(regExp));
    if (value.match(regexEmail) || value.match(sttr)) {
      return setValidatelogin("Email");
    } else if (value.match(regExp)) {
      return setValidatelogin("Phone");
    } else {
      setValidatelogin();
    }
  };
  return (
    <>
      <div className="Login-page-container">
        <Header />
        <div className="login_content">
          <Row>
            <Col span={12}>
              <img src={LoginImage} />
            </Col>
            <Col span={12}>
              <div className="login_inputFields">
                <h1>Login</h1>
                <Divider />
                <Form form={form} onFinish={handleOnFinish}>
                  {/* <Form.Item name="name" rules={Rules.name}>
                    <Input placeholder="Enter Name" />
                  </Form.Item> */}
                  {/* <Form.Item name="email" rules={Rules.email}>
                    <Input placeholder="Enter email" />
                  </Form.Item> */}
                  <Form.Item name="login" rules={Rules.login}>
                    <Input
                      placeholder="Enter Email or PhoneNumber"
                      type={validatelogin === "Phone" && "number"}
                      onChange={(e) => validateEmail(e.target.value)}
                    />
                  </Form.Item>
                  <div className="checkbox_content">
                    <Form.Item>
                      <Button type="primary" htmlType="submit" loading={loading}>
                        Login
                      </Button>
                    </Form.Item>
                  </div>
                </Form>
              </div>
              <div className="login_Signup_tag">
                <h4>
                  Don’t have an acoount ?<span onClick={() => navigate("/signup")}> Sign Up</span>
                </h4>
              </div>
            </Col>
          </Row>
        </div>
        <Modal
          visible={enterOtp}
          centered
          onCancel={() => setEnterOtp(false)}
          footer={null}
          className="verify_otp_modal"
        >
          {/* <EnterOtpModal setEnterOtp={setEnterOtp} /> */}
        </Modal>
      </div>
      {/* </Spin> */}
    </>
  );
};

export default LoginPage;
