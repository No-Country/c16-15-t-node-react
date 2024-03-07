import { Routes, Route } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Index from "./routes/Index";
import About from "./routes/About";
import Projects from "./routes/Projects";
import MainBanner from "./banner/MainBanner";
import OurServices from "./ourServices/OurServices";
import AboutUs from "./ourServices/AboutUs";
import FairsGrid from "./fairs/FairsGrid";
import WorkWithUs from "./workWithUs/WorkWithUs";
import Pointsmap from "./pointsmap/Pointsmap";
import Contact from "./routes/Contact";
import NotFound from "./routes/NotFound";

function App() {
  return (
    <>
      <Header />
      <br />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/proyectos" element={<Projects />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
