import Hero from "@/components/Hero"
const Home = () => {
  return (
    <>
      {/* Page Wrapper */}
      <main className="max-w-[1920px] mx-auto bg-white overflow-hidden">
        <h1 className="h1">Don Oscar</h1>
        {/* Hero */}
        <Hero />
      </main>
      {/* Temporal div */}
      <div className="h-[3000px]"></div>

    </>
  )
}

export default Home