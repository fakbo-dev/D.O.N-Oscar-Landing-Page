import Image from "next/image"
import sideImage from "/public/assets/hall/espejo-left-side-light-on.jpg"
import { FaPhoneAlt, FaArrowRight } from "react-icons/fa";
const About = () => {
    return (
        <section className="mt-[80px] xl:mt-[200px] relative z-20">
            <div className="container mx-auto  xl:px-0">

                <div className="flex flex-col text-center xl:flex-row  xl:text-left justify-between items-center gap-8 xl:gap-[74px]">
                    {/* Text */}
                    <div className=" flex-1 order-2 xl:order-none max-w-xl xl:max-w-[410px] flex flex-col items-center xl:items-start gap-8">
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
                    </div>
                    {/* img */}
                    <div className="max-w-[453px] order-1 xl:order-none mx-auto xl:mx-8 xl:max-w-none">
                        <Image src={sideImage}
                            className="rounded-bl-[90px] rounded-tr-[180px]" />
                    </div>



                </div>

            </div>
        </section>
    )
}

export default About