import { FaHammer } from "react-icons/fa6";


const Steps = () => {
    return (
        <section className="mt-[80px] xl:mt-[200px] relative z-20">

            <div className="container mx-auto">

                <div className="grid grid-cols-1 gap-12 xl:grid-cols-3">
                    <div className=" flex justify-center items-center flex-col">
                        <div className="mb-5">
                            <FaHammer className="text-accent text-5xl" />
                        </div>
                        <h3 className="h3 mb-5">Planeacion del proyecto</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, quam!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Steps