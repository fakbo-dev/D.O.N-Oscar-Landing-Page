"use client"
import { RevealWrapper } from "next-reveal";
import { FaArrowRight } from "react-icons/fa";


const Hero = () => {
    return (

        <>
            {/* Maybe need a change */}
            <section className="xl:bg-grid xl:bg-center xl:bg-repeat-y fixed top-0 bottom-0 left-0 right-0 z-10"></section>
            {/* Hero Part */}
            <section className="h-[640px] xl:h-[840px] bg-hero bg-center lg:bg-cover bg-no-repeat bg-fixed xl:rounded-bl-[290px] relative  xl:rounded-br-[290px] z-20">

                {/* Text */}
                <div className="container mx-auto h-full flex items-center justify-center xl:justify-start">

                    <RevealWrapper rotate={{ x: 0, y: 0, z: 0 }} origin='top' delay={500} duration={1500} distance='100px' reset={true} viewOffset={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                        <div className="w-[567px] flex flex-col items-center  text-center xl:text-left lg:items-start">
                            <h1 className="h1 mb-8 text-white">Haz de tu Hogar Unico</h1>
                            <p className="mb-8 text-2xl text-white  font-bolder tracking-widest">Carpintería/Ebanistería, Fabricación y Remodelación de Muebles, Cocinas, Vestier, Dormitorios y Mucho Más!! Todo a Medida</p>
                            <button className="btn btn-primary mx-auto xl:mx-0">Obten tu primera consulta gratis {<FaArrowRight className="text-accent" />}</button>
                        </div>
                    </RevealWrapper>
                </div>
            </section>
        </>
    )
}
export default Hero;