import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Pricing from "./Components/Pricing";
import TestimonialsCarousel from "./Components/Testimonial";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import About from "./Pages/About";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Partner from "./Components/Partner";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/"
          element={
            <>
              <Hero />
              <section id="services">
                <Services />
              </section>
              <Partner />
              <TestimonialsCarousel />
              <section id="pricing">
                <Pricing />
              </section>
              
              <Footer />
            </>
          }
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </>
  );
}

export default App;
