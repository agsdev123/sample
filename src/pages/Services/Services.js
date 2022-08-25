import React,{ useState} from 'react';
import Header from '../../Common/Header/Header';
import Footer from '../HomePage/Footer/Footer';
import Plotlayout from "./Plotlayout";
import ServicesIntroPage from './ServicesIntroPage/ServicesIntroPage';
import ServicesSlider from './ServicesIntroPage/ServicesSlider/ServicesSlider';
import './Services.scss'

const Services = () => {
  const [dynamiclayout, setDynamiclayout] = useState([
    {
      i: "BedRoom1",
      x: 1,
      y: 0,
      w: 10,
      h: 10,
      // maxW: 2,
    },
    { i: "Dinning", x: 11, y: 0, w: 10, h: 10 },
    { i: "Kitchen", x: 21, y: 0, w: 10, h: 10 },
    { i: "BedRoom2", x: 1, y: 2, w: 13, h: 12 },
    { i: "LivingRoom1", x: 14, y: 2, w: 10, h: 12 },
    { i: "Carparking", x: 24, y: 2, w: 7, h: 12 },
  ]);
  return (
    <div>
      <div className="Services_conatiner">
        <Header />
        <ServicesIntroPage />
        {/* <ServicesSlider/> */}
        <div
          className="PdfViewer_conatiner"
          style={{
            paddingTop: "2%",
          }}
        >
          <Plotlayout dynamiclayout={dynamiclayout} setDynamiclayout={setDynamiclayout} />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Services