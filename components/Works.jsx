"use client"
import Image from "next/image";


const listImages = [
    {
        img: "/assets/armario/2.jpg",
        type: "armario",
        title: "Elegantes armario",
        content: "Decoracion/Funcionalidad",
    },
    {
        img: "/assets/armario/3.jpg",
        type: "armario",
        title: "a medida para sus necesidades",
        content: "Decoracion/Funcionalidad",
    },
    {
        img: "/assets/bathroom/3.jpg",
        type: "bath",
        title: "baño minimalista",
        content: "Decoracion/Funcionalidad",
    },
    {
        img: "/assets/bathroom/5.jpg",
        type: "bath",
        title: "acabados para baño",
        content: "Decoracion/Funcionalidad",
    },
    {
        img: "/assets/clean-room/1.jpg",
        type: "lavadero",
        title: "lavandero",
        content: "Decoracion/Funcionalidad",
    },
    {
        img: "/assets/clean-room/2.jpg",
        type: "lavandero",
        title: "acabados impecables",
        content: "Decoracion/Funcionalidad",
    },
    {
        img: "/assets/gabinetes/4.jpg",
        type: "gabinete",
        title: "gabinete",
        content: "Decoracion/Funcionalidad",
    },
    {
        img: "/assets/gabinetes/12.jpg",
        type: "gabinete",
        title: "gabinete con mucho espacio",
        content: "Decoracion/Funcionalidad",
    },
    {
        img: "/assets/hall/5.jpg",
        type: "hall",
        title: "las mejores recepciones",
        content: "Decoracion/Funcionalidad",
    },
    {
        img: "/assets/hall/4.jpg",
        type: "muro",
        title: "Elegante muro de madera",
        content: "Decoracion/Funcionalidad",
    },
    {
        img: "/assets/kids-room/1.jpg",
        type: "cuarto",
        title: "hermoso diseño de gabetines",
        content: "Decoracion/Funcionalidad",
    },
    {
        img: "/assets/kids-room/4.jpg",
        type: "cuarto-espacioso",
        title: "diseño de cuarto espacioso",
        content: "Decoracion/Funcionalidad",
    },
    {
        img: "/assets/kids-room/9.jpg",
        type: "muro instalacion de televisor gabinete",
        title: "gabinetes y muros",
        content: "Decoracion/Funcionalidad",
    },
    {
        img: "/assets/kitchen/1.jpg",
        type: "cocina",
        title: "cocina",
        content: "Decoracion/Funcionalidad",
    },
    {
        img: "/assets/living-room/1.jpg",
        type: "vidriera",
        title: "increible vidriera",
        content: "Decoracion/Funcionalidad",
    },
    {
        img: "/assets/living-room/2.jpg",
        type: "vidriera",
        title: "perfecto para tu sala comun",
        content: "Decoracion/Funcionalidad",
    },
    {
        img: "/assets/living-room/4.jpg",
        type: "armario",
        title: "muro/tv",
        content: "Decoracion/Funcionalidad",
    },
    {
        img: "/assets/living-room/6.jpg",
        type: "armado-de-muro",
        title: "diseño final",
        content: "Decoracion/Funcionalidad",
    },
];
const Works = () => {
    return (
        <section className="mt-[80px] xl:mt-[150px] relative z-20">
            <div className="container mx-auto flex justify-center items-center flex-col">
                <div className="text-center mb-24">
                    <h2 className="h2 mb-4">Sigue nuestros Proyectos</h2>
                    <p className="max-w-3xl mx-auto"> Creamos cocinas, vestier, dormitorios y mucho más, todo a medida. Nuestro equipo de expertos artesanos se dedica a brindarte muebles únicos y personalizados. Contáctanos hoy para convertir tus ideas en realidad. Estamos ansiosos por trabajar contigo en tu próximo proyecto.</p>
                </div>
                {/* grid */}
                <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-x-[104px] gap-y-[56px]">
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
                                    <h3 className="text-xl -tracking-tighter font-extrabold font-roboto">{title}</h3>
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