"use client"
import { RevealList } from "next-reveal"
import { FaArrowRight } from "react-icons/fa"
const Contact = () => {
    return (
        <section className="mt-[80px] xl:mt-[150px] relative z-20">
            <RevealList origin="bottom" interval={100} delay={500} distance="100px" duration={1500} reset={true} className="container mx-auto bg-primary sm:rounded-[70px] py-[80px]">
                <div className="max-w-[340px] mx-auto text-center md:max-w-[300px] xl:max-w-[640px] flex justify-center items-center flex-col">
                    <h2 className="h2 text-white mb-4">Trabajemos juntos</h2>
                    <p className="text-white mb-8 max-w-sm xl:max-w-none">tu diseño soñado esta a un click de distancia</p>
                    <button className="btn btn-primary mx-auto xl:mx-0 border border-accent"> Contactanos!{<FaArrowRight className="text-accent" />}</button>

                </div>
            </RevealList>
        </section>
    )
}

export default Contact