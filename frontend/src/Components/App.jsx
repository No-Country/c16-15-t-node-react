import { Routes, Route } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Index from "./routes/Index.route";
import About from "./routes/About.route";
import Projects from "./routes/Projects.route";
import Contact from "./routes/Contact.route";
import NotFound from "./routes/NotFound.route";
import Form from "./workWithUs/Form"

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
        <Route path="/Form" element={<Form />} />
      </Routes>
      <br/>
      <Footer />
    </>
  );
}

export default App;
