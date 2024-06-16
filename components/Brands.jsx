"use client"
import Image from "next/image";
import { RevealList } from "next-reveal";
const list = [
    {
        name: "Hotel Cristal Park",
        img: "/assets/banners/1.jpg",
        id: 0,
    },
    {
        name: "Dinastia",
        img: "/assets/banners/2.png",
        id: 1,
    },
    {
        name: "Nouma Trading",
        img: "/assets/banners/3.png",
        id: 2,
    },

];

const Brands = () => {
    return (
        <section className="mt-[80px] xl:mt-[200px] relative z-20">
            <div className="container mx-auto">
                <RevealList origin="bottom" interval={100} delay={500} distance="100px" duration={1500} reset={true} className=" flex flex-col xl:flex-row gap-12 justify-evenly items-center">
                    {list.map(({ name, img, id }) => (
                        <Image key={id} src={img} alt={name} width={150} height={150} title={name} />
                    ))}
                </RevealList>
            </div>
        </section>
    )
}

export default Brands