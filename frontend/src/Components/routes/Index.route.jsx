import MainBanner from "../banner/MainBanner";
import OurServices from "../ourServices/OurServices";
import AboutUs from "../ourServices/AboutUs";
import FairsGrid from "../fairs/FairsGrid";
import WorkWithUs from "../workWithUs/WorkWithUs";
import Pointsmap from "../pointsmap/Pointsmap";
import ResumeTeam from "../ourServices/ResumeTeam";

const Index = () => {
  return (
    <>
      <MainBanner />
      <br />
      <OurServices />
      <br />
      <ResumeTeam/>
      <br />
      {/*<FairsGrid />*/}
      <br />
      <WorkWithUs />
      <br />
      {/*<Pointsmap />*/}
      <br />
      
    </>
  );
};

export default Index;
