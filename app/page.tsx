import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Categories from "./components/Categories";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8fdf8]">
      <Header />
      <Hero />
      <About />
      <Products />
      <Categories />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
