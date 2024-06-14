
// Components
import Hero from "@/components/Hero"
import Steps from "@/components/Steps"
import About from "@/components/About"
import Testimonials from "@/components/Testimonials"

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
        <About />
        {/* Testimonials */}
        <Testimonials />
        {/* Temporal div */}
        <div className="h-[3000px]"></div>
      </main>
    </>
  )
}

export default Home