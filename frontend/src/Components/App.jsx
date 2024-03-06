import Header from "./header/Header";
import MainBanner from "./banner/MainBanner";
import OurServices from "./ourServices/OurServices";
import AboutUs from "./ourServices/AboutUs";
import FairsGrid from "./fairs/FairsGrid";
import WorkWithUs from  "./workWithUs/WorkWithUs";
import Footer from "./footer/Footer";
import "../../src/styles.css";


function App() {

  return (
    <>
      <Header/> 
      <br />     
      <MainBanner/>
      <br />
      <OurServices/>
      <br/>
      <AboutUs/>
      <br />
      <FairsGrid/>
      <br/>
      <WorkWithUs/>
      <br/>
      <Footer/>
    </>
  )
}

export default App;
