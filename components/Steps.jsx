"use client"
import { FaHammer } from "react-icons/fa6";
import { PiBlueprintLight } from "react-icons/pi";
import { GrInspect } from "react-icons/gr";
import { RevealWrapper, RevealList } from "next-reveal";


const list = [
    {
        name: "Inspeccion",
        icon: <GrInspect className="text-accent text-5xl" />,
        content: "Inspeccionamos su solicitud y sacamos un presupuesto a partir de su requerimiento",
    },
    {
        name: "Planeacion",
        icon: <PiBlueprintLight className="text-accent text-5xl" />,
        content: "Inspeccionamos su solicitud y sacamos un presupuesto a partir de su requerimiento",
    },
    {
        name: "Ejecucion",
        icon: <FaHammer className="text-accent text-5xl" />,
        content: "nos enfocamos en entregar un servicio excepcional al cliente. Nos aseguramos de que cada detalle se lleve a cabo con precisión.",
    },
];
const Steps = () => {
    return (
        <section className="mt-[80px] xl:mt-[200px] relative z-20 mb-11">


            <div className="container mx-auto">
                <RevealList origin="bottom" interval={100} delay={500} distance="100px" duration={1500} reset={true} className="grid grid-cols-1 gap-12 xl:grid-cols-3">
                    {list.map(({ name, icon, content }, i) => (
                        <div className="text-center" key={i}>
                            <div className="mb-4 flex justify-center">
                                {icon}
                            </div>
                            <h3 className="h3 mb-5">{name}</h3>
                            <p className="mb-5 max-w-md mx-auto">{content}</p>
                        </div>
                    ))}
                </RevealList>
            </div>
        </section>
    )
}

export default Steps