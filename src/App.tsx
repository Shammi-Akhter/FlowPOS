import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Pricing from "./Components/Pricing";
import TestimonialsCarousel from "./Components/Testimonial";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import About from "./Pages/About";
import Services from "./Components/Services";

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
              <section id="pricing">
                <Pricing />
              </section>
              <TestimonialsCarousel />
              <FAQ />
            </>
          }
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
