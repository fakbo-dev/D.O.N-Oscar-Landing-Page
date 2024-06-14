import { FaHammer } from "react-icons/fa6";
import { PiBlueprintLight } from "react-icons/pi";
import { GrInspect } from "react-icons/gr";


const Steps = () => {
    return (
        <section className="mt-[80px] xl:mt-[200px] relative z-20">

            <div className="container mx-auto">

                <div className="grid grid-cols-1 gap-12 xl:grid-cols-3">
                    <div className="text-center">
                        <div className="mb-4 flex justify-center">
                            <GrInspect className="text-accent text-5xl" />
                        </div>
                        <h3 className="h3 mb-5">Inspeccion</h3>
                        <p className="mb-5 max-w-md mx-auto">Inspeccionamos su solicitud y sacamos un presupuesto a partir de su requerimiento </p>
                    </div>

                    <div className="text-center">
                        <div className="mb-5 flex justify-center">
                            <PiBlueprintLight className="text-accent text-5xl" />
                        </div>
                        <h3 className="h3 mb-5">planeacion</h3>
                        <p className="mb-5 max-w-md mx-auto">en base al presupuesto nos encargamos de optimizar el precio para darles el mejor servicio asequible</p>
                    </div>

                    <div className="text-center">
                        <div className="mb-5 flex justify-center">
                            <FaHammer className="text-accent text-5xl" />
                        </div>
                        <h3 className="h3 mb-5">ejecucion</h3>
                        <p className="mb-5 max-w-md mx-auto"> nos enfocamos en entregar un servicio excepcional al cliente. Nuestro equipo altamente capacitado se asegurará de que cada detalle se lleve a cabo con precisión. Estamos comprometidos con tu éxito y superar tus expectativas.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Steps