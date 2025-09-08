import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import BPOSection from "@/components/BPOSection";
import Method4PC from "@/components/Method4PC";
import Results from "@/components/Results";
import Purpose from "@/components/Purpose";
import CTAFinal from "@/components/CTAFinal";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <BPOSection />
        <Method4PC />
        <Results />
        <Purpose />
        <CTAFinal />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
