"use client"
import Image from "next/image";
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
                <div className=" flex flex-col xl:flex-row gap-12 justify-evenly items-center">
                    {list.map(({ name, img, id }) => (
                        <Image key={id} src={img} alt={name} width={150} height={150} title={name} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Brands