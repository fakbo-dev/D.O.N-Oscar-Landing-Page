"use client"
import { RevealList, RevealWrapper } from "next-reveal";
import { Fragment } from "react"
const list = [
    {
        number: 33,
        content: "Años De Experienca",
        id: 37,
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
                    <div className="flex justify-center items-center gap-12">
                        {/* Grid items */}
                        {list.map(({ number, content, id }, i) => (
                            <Fragment key={id}>
                                <div className={`${i !== list.length - 1 && "xl:border-r xl:border-accent"} text-center`}>
                                    <h3 className="h1 text-accent mb-4">{number}</h3>
                                    <p className="text-white px-10">{content}</p>
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