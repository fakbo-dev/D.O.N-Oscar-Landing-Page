"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay, Navigation } from "swiper/modules"
import { IoIosPerson } from "react-icons/io";
import { SlUserFemale } from "react-icons/sl";
import { RevealWrapper } from "next-reveal";
import { Fragment } from "react"

// swiper style
import "swiper/css";
import "swiper/css/pagination"

const lists = [
    {
        name: "Maria González",
        content: "Su equipo de carpinteros y artesanos expertos trabajaron conmigo para diseñar y construir la cocina y el armario perfectos para la casa de mis sueños.",
        gender: "female",
        id: 100
    },
    {
        name: "Carlos Pérez",
        content: "D.O.N Oscar hizo un trabajo excepcional en mi dormitorio. Crearon un vestier a medida que maximiza el espacio y se ve increíble.",
        gender: "male",
        id: 101
    },
    {
        name: "Ana Rodríguez",
        content: "D.O.N Oscar es sinónimo de calidad y excelencia. Su equipo remodeló mi sala de entretenimiento con muebles de madera hechos a medida que son tanto funcionales como estéticamente agradables. ",
        gender: "female",
        id: 102
    },
    {
        name: "javier Martínez",
        content: "Gran trabajo 10/10 5 entrellas recomendado.",
        gender: "male",
        id: 999
    },
    {
        name: "Laura Jiménez",
        content: "D.O.N Oscar es un verdadero maestro de la carpintería y ebanistería. Su trabajo en mi casa ha sido excepcional, desde la fabricación de muebles de cocina hasta la remodelación de dormitorios.",
        gender: "female",
        id: 103
    },
    {
        name: "Alex Rodgers",
        content: "D.O.N Oscar es un gran negocio por el que apostar y colaborar.",
        gender: "male",
        id: 104
    },
];

const Testimonials = () => {
    return (
        <>
            <div id="testimonials"></div>
            <section className="mt-[80px] xl:mt-[200px] relative z-20">
                {/* Container */}
                {/* Slider */}
                <div className="container mx-auto bg-accent rounded-[70px] px-6">

                    <RevealWrapper origin='bottom' distance="60px" duration={3000} delay={800} reset="true">


                        <div className="flex flex-col pt-[88px] items-center pb-[110px]">
                            <RevealWrapper origin='bottom' distance="60px" duration={3000} delay={800} reset="true">
                                <h2 className="h2 mb-12 text-center">Que dicen Nuestros Clientes</h2>
                            </RevealWrapper>
                            <Swiper
                                spaceBetween={20}
                                centeredSlides={false}
                                slidesPerView={3}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Autoplay, Pagination, Navigation]}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                    },
                                    960: {
                                        slidesPerView: 3,
                                    }
                                }}
                                className="w-full">
                                {lists.map(({ name, content, gender, id }, i) => (
                                    <Fragment key={id}>
                                        <SwiperSlide className="h-[400px] swiper" >
                                            {/* items */}
                                            <div className="w-full max-w-[450px] h-[340px] bg-white rounded-[30px] flex flex-col justify-center items-center p-9 mx-auto">
                                                <div className="flex gap-4 mb-6">
                                                    {gender === "male" ? (
                                                        <IoIosPerson
                                                            className="text-6xl text-accent" />
                                                    ) : (
                                                        <SlUserFemale
                                                            className="text-6xl text-accent" />
                                                    )}
                                                    <div>
                                                        <h3>{name}</h3>
                                                        <div>Venezuela</div>
                                                    </div>
                                                </div>
                                                <p className="text-base"><i>&quot;{content}&quot;</i></p>
                                            </div>

                                        </SwiperSlide>
                                    </Fragment>
                                ))}
                            </Swiper>

                        </div>
                    </RevealWrapper>
                </div>
            </section>
        </>

    )
}

export default Testimonials

