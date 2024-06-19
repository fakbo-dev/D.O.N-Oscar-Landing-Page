import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="sticky top-0  shadow-xl z-30  card">
            <div className="container mx-auto flex justify-between h-full">
                {/* logo */}
                <Link href="/">
                    <Image src="/assets/logo/logo.png" width="150" height="150" alt="logo Image" />
                </Link>

                {/* Desktop nav */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                </div>

                {/* Mobile nav */}
                <div className="xl:hidden flex">
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}

export default Header