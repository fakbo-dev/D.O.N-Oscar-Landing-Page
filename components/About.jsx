"use client"
import Image from "next/image"
import sideImage from "/public/assets/hall/1.jpg"
import { FaPhoneAlt, FaArrowRight } from "react-icons/fa";
import { RevealWrapper } from "next-reveal";
const About = ({ id }) => {
    return (
        <>
            <div id={id}></div>
            <section className="mt-[80px] xl:mt-[200px] relative z-20" id={id}>

                <div className="container mx-auto  xl:px-0">

                    <div className="flex flex-col text-center xl:flex-row  xl:text-left justify-between items-center gap-8 xl:gap-[74px]">
                        {/* Text */}
                        <RevealWrapper origin="left" interval={100} delay={500} distance="300px" duration={1500} reset={true} className=" flex-1 order-2 xl:order-none max-w-xl xl:max-w-[410px] flex flex-col items-center xl:items-start gap-8">
                            <h2 className="text-5xl">comodidad y estilo directo a su ambiente</h2>
                            <p> Nos enorgullece ofrecer soluciones personalizadas para transformar cualquier espacio en un oasis de confort y elegancia.</p>

                            {/* Phone */}
                            <div className="flex items-center justify-center xl:justify-start gap-4">
                                <div className="bg-accent/15 w-[93px] h-[93px] rounded-full flex justify-center items-center">
                                    <FaPhoneAlt className="text-accent text-4xl" />
                                </div>
                                <div className="text-left">
                                    <div className="text-1xl font-bold">(+58) 412-4340253</div>
                                    <div>Contactanos!</div>
                                </div>
                            </div>
                            <button className="btn btn-primary mx-auto xl:mx-0">Obten tu primera consulta gratis {<FaArrowRight className="text-accent" />}</button>
                        </RevealWrapper>
                        {/* img */}
                        <RevealWrapper origin="right" interval={100} delay={500} distance="300px" duration={1500} reset={true} className="max-w-[453px] order-1 xl:order-none mx-auto xl:mx-8 xl:max-w-none">
                            <Image src={sideImage}
                                className="rounded-bl-[90px] rounded-tr-[180px]"
                                alt="About-image" />
                        </RevealWrapper>



                    </div>

                </div>
            </section>
        </>
    )
}

export default About