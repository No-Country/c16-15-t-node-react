import Header from "./header/Header";
import MainBanner from "./banner/MainBanner";
import FairsGrid from "./fairs/FairsGrid";
import AboutUs from "./variousServices/AboutUs";

import Pointsmap from "./pointsmap/Pointsmap";

function App() {

  return (
    <>
      <Header/> 
      <br />     
      <MainBanner/>
      <br />
      <AboutUs/>
      <br />
      <FairsGrid/>
      <br />
      <Pointsmap/>
    </>
  )
}

export default App;
