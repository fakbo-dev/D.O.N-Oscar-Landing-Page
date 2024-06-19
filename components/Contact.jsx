"use client"
import { RevealList, RevealWrapper } from "next-reveal"
import { FaArrowRight } from "react-icons/fa"
import Link from "next/link"
const Contact = () => {
    return (
        <>
            <div id="contact"></div>
            <section className="mt-[80px] xl:mt-[150px] relative z-20">
                <div className="container mx-auto bg-primary sm:rounded-[70px] py-[80px]">
                    <div className="max-w-[340px] mx-auto text-center md:max-w-[300px] xl:max-w-[640px] flex justify-center items-center flex-col">
                        <h2 className="h2 text-white mb-4">Trabajemos juntos</h2>
                        <p className="text-white mb-8 max-w-sm xl:max-w-none">tu diseño soñado esta a un click de distancia</p>
                        <Link className="btn btn-primary mx-auto xl:mx-0 border border-accent" href="https://wa.me/584124340253" target="_BLANK"> Contactanos!{<FaArrowRight className="text-accent" />}</Link>

                    </div>
                </div>
            </section>
        </>

    )
}

export default Contact