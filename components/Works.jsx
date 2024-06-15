"use client"
import Image from "next/image";


const listImages = [
    {
        img: "/assets/armario/2.jpg",
        type: "armario",
        title: "Elegante armario",
        content: "Decoracion/Funcionalidad",
    },
    {
        img: "/assets/armario/3.jpg",
        type: "armario",
        title: "Elegante armario",
        content: "Decoracion/Funcionalidad",
    },
    {
        img: "/assets/armario/1.jpg",
        type: "armario",
        title: "Elegante armario",
        content: "Decoracion/Funcionalidad",
    },
];
const Works = () => {
    return (
        <section className="mt-[80px] xl:mt-[150px] relative z-20">
            <div className="container mx-auto flex justify-center items-center flex-col">
                <div className="text-center mb-24">
                    <h2 className="h2 mb-4">Sigue nuestros Proyectos</h2>
                    <p className="max-w-3xl mx-auto"> Creamos cocinas, vestier, dormitorios y mucho más, todo a medida. Nuestro equipo de expertos artesanos se dedica a brindarte muebles únicos y personalizados. Contáctanos hoy para convertir tus ideas en realidad. ¡Estamos ansiosos por trabajar contigo en tu próximo proyecto.</p>
                </div>
                {/* grid */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-[104px] gap-y-[56px]">
                    {listImages.map(({ img, type, title, content }, i) => (
                        <div className="w-full max-w-[548px] h-full max-h-[500px] mx-auto mb-7" key={i}>
                            <Image
                                src={img}
                                alt={type}
                                className="mb-4 rounded-tr-[80px]"
                                width={350}
                                height={100}
                            />
                            <div className="flex justify-between items-center w-full ">
                                <div>
                                    <h3 className="text-1xl">{title}</h3>
                                    <p className="text-base"><i>{content}</i></p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Works;