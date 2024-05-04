import Navbar from "./components/Navbar/Navbar";
import Hero from "./pages/Hero";
import Feature from "./pages/Feature";
import WorkFlow from "./pages/WorkFlow";
import Price from "./pages/Price";
import Testimonial from "./pages/Testimonial";
import Footer from "./pages/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <Feature />
        <WorkFlow />
        <Price />
        <Testimonial />
        <Footer />
      </div>
    </div>
  );
}

export default App;
