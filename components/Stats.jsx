"use client"
import { RevealList, RevealWrapper } from "next-reveal";
import { Fragment } from "react"
const list = [
    {
        number: 6,
        content: "Años De Experienca",
        id: 37,
    },
    {
        number: 10,
        content: "Proyectos completados",
        id: 38
    },
    {
        number: 15,
        content: "Proyectos Activos",
        id: 39
    },
    {
        number: "100%",
        content: "clientes Satisfechos",
        id: 40
    },
];


const Stats = () => {
    return (
        <>
            <div id="experience"></div>
            <section className="mt-[80px] xl:mt-[150px] relative z-20 bg-secondary py-[80px] xl:py-[150px]">
                <div className="container mx-auto">
                    {/* Grid */}
                    <div className="grid grid-cols-1 xl:grid-cols-4 gap-12">
                        {/* Grid items */}
                        {list.map(({ number, content, id }, i) => (
                            <Fragment key={id}>
                                <div className={`${i !== list.length - 1 && "xl:border-r xl:border-accent"} text-center`}>
                                    <h3 className="h1 text-accent mb-4">{number}</h3>
                                    <p className="text-white">{content}</p>
                                </div>
                            </Fragment>
                        ))}
                    </div>
                </div>
            </section>
        </>

    )
}

export default Stats