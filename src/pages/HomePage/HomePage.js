import Header from "../../Common/Header/Header";
import Footer from "./Footer/Footer";
import HomeIntroPage from "./HomeIntroPage/HomeIntroPage";
import "./HomePage.scss";
import HomePageServices from "./HomePageServices/HomePageServices";
import IntroData from "./IntroData/IntroData";
// import PdfViewer from "./PdfViewer/PdfViewer";
import PlotAreaSection from "./PlotAreaSection/PlotAreaSection";

const HomePage = () => {


  return (
    <div className="HomePage_container">
        {/* <Header/> */}
        <HomeIntroPage/>
        {/* <IntroData/> */}
        {/* <HomePageServices/> */}
        {/* <PdfViewer/> */}
        <PlotAreaSection/>
        <Footer/>
    </div>
  );
};
export default HomePage;
