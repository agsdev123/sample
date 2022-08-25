import { Col, Input, Row, Tabs } from 'antd'
import React, {useState} from 'react'
import "leaflet/dist/leaflet.css";
import CustomImage from '../../../components/Image/CustomImage'
import { AssetsImage } from '../../../constants/AssetsConstant'
import "./IntroData.scss";
import { AimOutlined } from '@ant-design/icons';
import { Map, Marker, TileLayer, CircleMarker } from "react-leaflet";
// import positionIcon from "../../../Assets/map.png"
import ReactDOMServer from "react-dom/server";
import L from "leaflet";
import { PositionIcon } from './constant';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GoogleAutoComplete from '../../../Common/AutoComplete/GoggleAutoComplete';

const { TabPane } = Tabs;
const IntroData = () => {
  const [Searchfilter, setSearchfilter] = useState({
    lat: 17.385,
    long: 78.4867,
    facing: undefined,
    length: "",
    breadth: "",
  });
  const MAPBOX_API_KEY = process.env.REACT_APP_MAPBOX_API_KEY;
  const MAPBOX_USERID = process.env.REACT_APP_MAPBOX_USERID;
  const MAPBOX_STYLEID = process.env.REACT_APP_MAPBOX_STYLEID;
  const { lat, long } = Searchfilter;
  console.log("Searchfilter", Searchfilter);
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 3,
    arrows: true,
    centerMode: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          centerMode: false,
          variableWidth: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          infinite: true,
          autoplay: false,
          speed: 500,
        },
      },
    ],
  };

  const generatePulsatingMarker = function (radius, color) {
    const cssStyle = `
    width: ${radius}px;
    height: ${radius}px;
    background: ${color};
    color: ${color};
    box-shadow: 0 0 0 ${color};
  `;
    return L.divIcon({
      html: `<span style="${cssStyle}" class="pulse"/>`,
      className: "",
    });
  };

  const pulsatingIcon = generatePulsatingMarker(16, "red");
  L.marker([51.497, -0.09], { icon: pulsatingIcon });

  var pulsatingIcon2 = generatePulsatingMarker(10, "green");
  L.marker([51.493, -0.09], { icon: pulsatingIcon2 });
  const redOptions = { color: "red" };

  return (
    <div>
      <div className="introData_content">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Plot Location" key="1">
            <div className="intro_data_imgs">
              <div className="intro_directions">
                {/* <Input placeholder='Enter Location' type="text" /> */}
                <GoogleAutoComplete
                  placeholder={"Enter Location"}
                  location={"location"}
                  address={"address"}
                  setSearchfilter={setSearchfilter}
                />
                <div className="builtup_location">
                  <Map center={[lat, long]} zoom={18} style={{ height: "100%", width: "100%" }}>
                    <TileLayer
                      url={`https://api.mapbox.com/styles/v1/${MAPBOX_USERID}/${MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_API_KEY}`}
                      maxZoom={30}

                      // subdomains={["mt1", "mt2", "mt3"]}
                    />
                    {/* <CircleMarker
                      center={["17.3850", "78.4867"]}
                      pathOptions={redOptions}
                      radius={20}
                      stroke
                      fillOpacity={0.8}
                      // color={"#222222"}
                      // fillColor={"#FFFFFF"}
                      // fillOpacity={0.9}
                      strokeOpacity={0.2}
                    > */}
                    {/* <Popup>Popup in CircleMarker</Popup> */}
                    {/* </CircleMarker> */}
                    <Marker
                      position={[lat, long]}
                      icon={pulsatingIcon}
                      // onclick={handleClick}
                    />
                  </Map>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tab="Cosmology" key="2">
            <div className="intro_directions1">
              <div className="intro_slider">
                <Slider {...settings}>
                  <div className="introSlider_data">
                    <img src={require("../../../Assets/Bath.jpg")} />
                  </div>
                  <div className="introSlider_data">
                    <img src={require("../../../Assets/Bed_Position.jpg")} />
                  </div>
                  <div className="introSlider_data">
                    <img src={require("../../../Assets/Builtup_Divisions.jpg")} />
                  </div>
                  <div className="introSlider_data">
                    <img src={require("../../../Assets/Organize.jpg")} />
                  </div>
                  <div className="introSlider_data">
                    <img src={require("../../../Assets/Bath.jpg")} />
                  </div>
                  <div className="introSlider_data">
                    <img src={require("../../../Assets/Bed_Position.jpg")} />
                  </div>
                  <div className="introSlider_data">
                    <img src={require("../../../Assets/Builtup_Divisions.jpg")} />
                  </div>
                  <div className="introSlider_data">
                    <img src={require("../../../Assets/Organize.jpg")} />
                  </div>
                  <div className="introSlider_data">
                    <img src={require("../../../Assets/Bath.jpg")} />
                  </div>
                  <div className="introSlider_data">
                    <img src={require("../../../Assets/Bed_Position.jpg")} />
                  </div>
                  <div className="introSlider_data">
                    <img src={require("../../../Assets/Builtup_Divisions.jpg")} />
                  </div>
                  <div className="introSlider_data">
                    <img src={require("../../../Assets/Organize.jpg")} />
                  </div>
                </Slider>
              </div>
            </div>
          </TabPane>
          <TabPane tab="Solstice & Equinoxes" key="3">
            <div className="intro_directions2">
              <div className="intro_slider">
                <Slider {...settings}>
                  <div className="introSlider_data">
                    <CustomImage src={AssetsImage.DirectionsImg2} alt="" preview={false} />
                  </div>
                  <div className="introSlider_data">
                    {/* <CustomImage src={AssetsImage.DirectionsImg2} alt="" preview={false} /> */}
                  </div>
                  <div className="introSlider_data">
                    {/* <CustomImage src={AssetsImage.DirectionsImg2} alt="" preview={false} /> */}
                  </div>
                </Slider>
              </div>
            </div>
          </TabPane>
        </Tabs>

        {/* <Row className="intro_data_imgs" span={24}>
          <Col span={8}>
          <div className="intro_directions">
              <div className="builtup_location">
                <Map
                  center={["17.3850", "78.4867"]}
                  zoom={5}
                  style={{ height: "100%", width: "100%" }}
                >
                  <TileLayer
                    //attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="http://{s}.tiles.mapbox.com/v3/MapID/{z}/{x}/{y}.png"
                    maxZoom={18}
                    minZoom={2}

                  />
                  <Marker
                    position={["17.3850", "78.4867"]}
                    icon={PositionIcon}
                  // onclick={handleClick}
                  />
                </Map>
              </div>
            </div>
          </Col>
          <Col span={8}>

          </Col>
          <Col span={8} className="col_3">

          </Col>
        </Row>  */}
      </div>
    </div>
  );
}

export default IntroData