import React from "react";
import { Button, Input, Upload } from "antd";
import "./ContactUs.scss";
import { PaperClipOutlined, WhatsAppOutlined, DownOutlined } from "@ant-design/icons";
import Header from "../../Common/Header/Header";
import Footer from "../HomePage/Footer/Footer";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const { TextArea } = Input;
const ContactUs = () => {
  return (
    <div>
      <div className="conatct_us_container">
        <Header />
        <div className="conatct_us_content">
          <div className="conatct_us_register">
            <h3>FEEL FREE TO CONNECT WITH US DIGITALLY!</h3>
            <Input placeholder="Name" />
            <Input placeholder="Phone" />
            <Input placeholder="Email" />
            <TextArea rows={5} placeholder="Message" maxLength={100} />
            <div className="Register_link">
              <div className="attach_file">
                <PaperClipOutlined />
                <Upload>
                  <h4>Attach Resume</h4>
                </Upload>
              </div>
              <h5>
                Attachments <span>(0)</span>
              </h5>
            </div>
            <Button>SEND</Button>
            <p>
              This site is protected by reCAPTCHA and the <span> Google Privacy Policy</span> and
              <span> Terms of Service</span> apply.
            </p>
          </div>
          <div className="conatct_us_share">
            <a
              href="https://api.whatsapp.com/send/?phone=917671087883&text&app_absent=0"
              rel="noreferrer"
              target="_blank"
            >
              <Button>
                <span>
                  <WhatsAppOutlined />
                </span>
                iBuiltup Team
              </Button>
            </a>
            <h3>IBUILTUP</h3>
            <h4>401 Vamsee Towers, Mahesh Nagar, ECIL POST Hyderabad</h4>
            <h5>project@iBuiltup.com</h5>
            <h3>HOURS</h3>
            <h4>
              Open Today
              <span>09:00 am – 05:00 pm</span>
              <DownOutlined />
            </h4>
          </div>
        </div>
        <div className="testCare_location">
          {/* <MapContainer
            // center={coordinates}
            zoom={12}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
            // position={coordinates}
            // icon={PositionIcon}
            // onclick={handleClick}
            />
          </MapContainer> */}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
