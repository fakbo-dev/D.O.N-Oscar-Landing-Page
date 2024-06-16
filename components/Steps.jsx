"use client"
import { FaHammer } from "react-icons/fa6";
import { PiBlueprintLight } from "react-icons/pi";
import { GrInspect } from "react-icons/gr";
import { RevealWrapper, RevealList } from "next-reveal";
import { Fragment } from "react"
const list = [
    {
        name: "Inspeccion",
        icon: <GrInspect className="text-accent text-5xl" />,
        content: "Inspeccionamos su solicitud y sacamos un presupuesto a partir de su requerimiento",
        id: 12,
    },
    {
        name: "Planeacion",
        icon: <PiBlueprintLight className="text-accent text-5xl" />,
        content: "A partir del presupuesto nos encargamos de encontrar los mejores materiales para entregar el mejor producto posible",
        id: 13
    },
    {
        name: "Ejecucion",
        icon: <FaHammer className="text-accent text-5xl" />,
        content: "nos enfocamos en entregar un servicio excepcional al cliente. Nos aseguramos de que cada detalle se lleve a cabo con precisión.",
        id: 14
    },
];
const Steps = () => {
    return (
        <>
            <div id="about"></div>
            <section className="mt-[80px] xl:mt-[200px] relative z-20 mb-11">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 gap-12 xl:grid-cols-3">
                        {list.map(({ name, icon, content, id }) => (
                            <Fragment key={id}>
                                <RevealList origin='bottom' distance="100px" duration={3000} delay={600} interval={100} reset="true" className="text-center">
                                    <div className="mb-4 flex justify-center">
                                        {icon}
                                    </div>
                                    <h3 className="h3 mb-5">{name}</h3>
                                    <p className="mb-5 max-w-md mx-auto">{content}</p>
                                </RevealList>
                            </Fragment>
                        ))}
                    </div>
                </div>
            </section>
        </>

    )
}

export default Steps