import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import WhatsApp from "./components/WhatsApp/WhatsApp";
// import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import PdfViewer from './components/PdfViewer';
import Footer from "./components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const pdfUrl = 'Davis-CV.pdf'; 

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Router>
        <Navbar />
        <WhatsApp />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Intro />
                <Services />
                <Experience />
                <Testimonial />
                <Works />
                <Footer />
              </> 
             } 
          />
           <Route path="/"element={"/"} /> 
          <Route path="/PdfViewer" element={<PdfViewer pdfUrl={pdfUrl}  />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;



