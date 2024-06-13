import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";

const Header = () => {
    return (
        <header className="sticky top-0 h-[98px] shadow-xl z-30 bg-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* logo */}
                <Link href="/">
                    <Image src="/assets/logo/logo.jpg" width="150" height="150" alt="logo Image" />
                </Link>

                {/* Desktop nav */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                </div>

                {/* Mobile nav */}
                <div className="xl:hidden  fixed w-full bg-white overflow-hidden border-t top-[90px] left-0 right-0 flex flex-col gap-4">
                    <Nav />
                </div>
            </div>
        </header>
    )
}

export default Header