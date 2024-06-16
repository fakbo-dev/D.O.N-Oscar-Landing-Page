"use client"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { GiGearHammer } from "react-icons/gi";

const links = [
    {
        name: "inicio",
        path: "/",
        id: 6,
    },
    {
        name: "nosotros",
        path: "#about",
        id: 7,
    },
    {
        name: "testimonios",
        path: "#testimonials",
        id: 8,
    },
    {
        name: "Nuestro trabajos",
        path: "#our-works",
        id: 9,
    },
    {
        name: "experiencia",
        path: "#experience",
        id: 10,
    },
    {
        name: "contacto",
        path: "#contact",
        id: 11,
    },
]

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <GiGearHammer className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col bg-secondary">
                {/* Logo */}
                <div className="mt-32 mb-32 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text 4xl font-semibold text-white">
                            D.O.N Oscar
                        </h1>
                    </Link>
                </div>
                {/* Nav */}
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map(({ name, path, id }, i) => (
                        <Link
                            href={path}
                            key={id}
                            className={`text-xl capitalize hover:text-accent transition-all text-white`}>
                            {name}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav