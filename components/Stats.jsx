"use client"
import { RevealList } from "next-reveal";
const list = [
    {
        number: 6,
        content: "Años De Experienca",
    },
    {
        number: 10,
        content: "Proyectos completados",
    },
    {
        number: 15,
        content: "Proyectos Activos",
    },
    {
        number: "100%",
        content: "clientes Satisfechos",
    },
];


const Stats = () => {
    return (
        <section className="mt-[80px] xl:mt-[150px] relative z-20 bg-secondary py-[80px] xl:py-[150px]">
            <div className="container mx-auto">
                {/* Grid */}
                <RevealList origin="bottom" interval={100} delay={500} distance="100px" duration={1500} reset={true} className="grid grid-cols-1 xl:grid-cols-4 gap-12">
                    {/* Grid items */}
                    {list.map(({ number, content }, i) => (
                        <div className={`${i !== list.length - 1 && "xl:border-r xl:border-accent"} text-center`} key={i}>
                            <h3 className="h1 text-accent mb-4">{number}</h3>
                            <p className="text-white">{content}</p>
                        </div>
                    ))}
                </RevealList>
            </div>
        </section>
    )
}

export default Stats