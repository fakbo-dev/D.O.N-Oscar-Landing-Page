"use client"
import Link from "next/link"
const links = [
    {
        name: "inicio",
        path: "/",
        id: 0,
    },
    {
        name: "nosotros",
        path: "#about",
        id: 1,
    },
    {
        name: "testimonios",
        path: "#testimonials",
        id: 2,
    },
    {
        name: "Nuestro trabajos",
        path: "#our-works",
        id: 3,
    },
    {
        name: "proyectos",
        path: "#projects",
        id: 4,
    },
    {
        name: "contacto",
        path: "#contact",
        id: 5,
    },
]
const Nav = () => {
    return (
        <nav className="flex gap-8">
            {links.map(({ name, path, id }) => (
                <Link href={path} key={id} className="hover:text-accent transition-all delay-100 text-black font-bold">{name}</Link>
            ))}
        </nav>
    )
}

export default Nav;