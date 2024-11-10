import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Programs from "./Components/programs/programs";
import Testimonial from "./Components/Testimonial/Testimonial";
import Title from "./Components/Title/Title";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle="OUR PROGRAM" title="What We Offer" />
        <Programs />
        <About />
        <Title subtitle="Gallery" title="Campus Photos" />
        <Campus />
        <Title subtitle="testimonials" title="what student says" />
        <Testimonial />
        <Title subtitle="contact us" title="get in touch" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
