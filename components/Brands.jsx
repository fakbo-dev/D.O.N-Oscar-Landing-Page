"use client"
import Image from "next/image";
import { RevealList } from "next-reveal";
const list = [
    {
        name: "Hotel Cristal Park",
        img: "/assets/banners/1.jpg",
        id: 15,
    },
    {
        name: "Dinastia",
        img: "/assets/banners/2.png",
        id: 16,
    },
    {
        name: "Nouma Trading",
        img: "/assets/banners/3.png",
        id: 17,
    },

];

const Brands = () => {
    return (
        <section className="mt-[80px] xl:mt-[200px] relative z-20">
            <div className="container mx-auto">
                <RevealList origin='bottom' distance="100px" duration={3000} delay={600} reset="true" interval={100}>
                    <div className=" flex flex-col xl:flex-row gap-12 justify-evenly items-center">
                        {list.map(({ name, img, id }) => (
                            <Image key={id} src={img} alt={name} width={150} height={150} title={name} />
                        ))}
                    </div>
                </RevealList>
            </div>
        </section>
    )
}

export default Brands