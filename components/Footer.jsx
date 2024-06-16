"use client";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RevealList } from "next-reveal";
import { Fragment } from "react"
const list = [
    {
        name: "Instagram",
        content: <FaInstagram />,
        path: "https://www.instagram.com/carpinteriadonoscar/",
        id: 50000,
    },
];

const linkList = [
    {
        name: "inicio",
        path: "/",
        id: 50,
    },
    {
        name: "nosotros",
        path: "#about",
        id: 51,
    },
    {
        name: "testimonios",
        path: "#testimonials",
        id: 52,
    },
    {
        name: "Nuestro trabajos",
        path: "#our-works",
        id: 53,
    },
    {
        name: "experiencia",
        path: "#experience",
        id: 54,
    },
    {
        name: "contacto",
        path: "#contact",
        id: 55,
    },
];

const services = [
    {
        name: "cocina",
        id: 56,
        path: "#our-works",
    },
    {
        name: "comedor",
        id: 57,
        path: "#our-works",

    },
    {
        name: "habitacion",
        id: 58,
        path: "#our-works",

    },
    {
        name: "sala comun",
        id: 59,
        path: "#our-works",

    },
    {
        name: "baños",
        id: 60,
        path: "#our-works",

    },
    {
        name: "y Muchos mas",
        id: 61,
        path: "#our-works",

    },

]
const contact = [
    {
        name: "Urb. Los bucares. Calle los apamates, casa 102-33, Flor Amarillo, 2003 Valencia",
        id: 62,
    },
    {
        name: "(+58) 4128878351",
        id: 63,
    },
    {
        name: "(+58) 412-4340253",
        id: 64,
    },

];
const Footer = () => {
    return (
        <footer className="mt-[80px] xl:mt-[150px] relative z-20">
            <div className="container mx-auto px-0">
                <RevealList origin="bottom" interval={100} delay={500} distance="100px" duration={1500} className="flex flex-col xl:flex-row xl:gap-[100px] xl:mb-[150px] bg-secondary text-white rounded-md py-5">
                    <div className="w-full max-w-[400px] mx-auto mb-8 text-center xl:text-left flex flex-col justify-center items-center">
                        <div className="flex justify-center items-center mb-8">
                            <Image src="/assets/logo/logo.jpg" alt="logo"
                                width={150} height={150} />
                        </div>
                        <p className="mb-8 text-xl">Carpinteria y Ebanisteria</p>
                        {/* Socials */}
                        {list.map(({ name, content, id, path }) => (
                            <Fragment key={id}>
                                <div className="text-accent flex gap-[54px] justify-center">
                                    <Link href={path} target="_BLANK" title={name} className="text-5xl">{content}</Link>
                                </div>
                            </Fragment>
                        ))}
                    </div>

                    <div className=" flex-1 flex flex-col xl:flex-row text-center xl:text-left gap-12 xl:gap-[100px] xl:justify-end xl:min-w-[800px]">
                        <div className="footer__item">
                            <h3 className="h3 mb-3 text-white font-extrabold">Secciones</h3>
                            {linkList.map(({ name, path, id }) => (
                                <Fragment key={id}>
                                    <div className="flex flex-end justify-center flex-col gap-4" >
                                        <Link href={path} className="hover:text-accent transition-all delay-100 text-white ">{name}</Link>
                                    </div>
                                </Fragment>
                            ))}
                        </div>

                        <div className="footer__item">
                            <h3 className="h3 mb-3 text-white font-extrabold">Servicios</h3>
                            {services.map(({ name, id, path }) => (
                                <Fragment key={id}>
                                    <div className="flex flex-end justify-center  flex-col gap-4" >
                                        <Link href={path} className="hover:text-accent transition-all delay-100 text-white ">{name}</Link>
                                    </div>
                                </Fragment>
                            ))}
                        </div>

                        <div className="footer__item max-w-[260px] mx-auto xl:mx-0 mb-20">
                            <h3 className="h3 mb-3 text-white font-extrabold">Contacto</h3>
                            {contact.map(({ name, id }) => (
                                <Fragment key={id}>
                                    <div className="flex flex-col gap-6 text-[20px]">
                                        <p>{name}</p>
                                    </div>
                                </Fragment>
                            ))}
                        </div>
                    </div>
                </RevealList>
            </div >
            {/* Copyright */}
            <div div className="flex flex-col gap-2 justify-center items-center py-10" >
                <p className="text-center text-lg xl:border-t-[2px]">Copyright &copy; D.O.N Oscar  Todos los derechos reservados</p>
                <p className="text-center text-lg"> Desarrollador: Mauricio Oropeza/Fakbo-web-dev <br /> <span className="text-1xl text-accent font-extrabold">2024</span></p>
                <Link href="https://github.com/fakbo-dev" target="_BLANK" alt="My Github">
                    <FaGithub className="text-accent text-5xl" />
                </Link>
            </div>
        </footer >
    )
}

export default Footer

