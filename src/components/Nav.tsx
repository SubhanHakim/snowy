import { useEffect, useState } from 'react'
import logo from "../assets/logo.png"

const navigation = [
    { name: "About", href: "#about" },
    { name: "Exchanges", href: "#exchanges" },
    { name: "Tokenomics", href: "#tokenomics" },
    { name: "How to buy", href: "#buy" },
];

export default function Nav() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <nav
            aria-label="Global"
            className={`fixed top-0 left-0 w-full z-50 shadow-lg transition-all duration-300 ${isScrolled ? "h-20" : "h-28"
                }`}
        >
            <div className="flex items-center justify-between p-4 lg:px-8 mx-auto max-w-screen-7xl">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <img
                            src={logo}
                            width={500}
                            height={500}
                            className={`transition-all duration-300 ${isScrolled ? "h-14 w-auto" : "h-20 w-auto"
                                }`}
                            alt="logo coin"
                        />
                    </a>
                </div>
                <div className="hidden lg:flex lg:gap-x-12 cursor-pointer uppercase">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={`transition-transform duration-300 ease-in-out transform hover:-translate-y-1 text-white text-shadow-duis-not-hover text-2xl font-bold font-stopbuck tracking-wider hover:text-red-600`}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Buy Button */}
                <div className="lg:flex lg:flex-1 lg:justify-end">
                    <a
                        href="#"
                        target="_blank"
                        className="transition-colors duration-300 ease-in-out font-stopbuck text-lg sm:text-2xl rounded-xl px-3.5 py-2.5 font-medium shadow-2xl bg-black text-white hover:bg-white hover:text-gray-900 outline-2 outline-offset-0"
                    >
                        Buy $PENGUMAZZ
                    </a>
                </div>
            </div>
        </nav>
    )
}
