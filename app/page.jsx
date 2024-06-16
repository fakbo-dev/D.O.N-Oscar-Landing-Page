
// Components
import Hero from "@/components/Hero";
import Steps from "@/components/Steps";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Brands from "@/components/Brands";
import Works from "@/components/Works";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";

const Home = () => {
  return (
    <>
      {/* Page Wrapper */}
      <main className="max-w-[1920px]  mx-auto bg-white overflow-hidden">
        {/* Hero */}
        <Hero />
        {/* Steps */}
        <Steps />
        {/* About */}
        <About id="about" />
        {/* Testimonials */}
        <Testimonials />
        {/* Brands */}
        <Brands />
        {/* Works */}
        <Works />
        {/* Stats */}
        <Stats />
        {/* Contact */}
        <Contact />
        {/* Temporal div */}
        <div className="h-[3000px]"></div>
      </main>
    </>
  )
}

export default Home