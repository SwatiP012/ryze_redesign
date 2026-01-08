import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className="sticky top-0 z-50">
            <div
                className={`absolute inset-0 transition-all duration-300
          ${scrolled
                        ? "bg-gradient-to-b from-orange-200 via-white/90 to-white backdrop-blur-md"
                        : "bg-gradient-to-b from-orange-200 via-white to-white"
                    }`}
            />

            <div
                className={`relative transition-all duration-300
          ${scrolled ? "shadow-sm" : ""}`}
            >
                <div className="max-w-[1440px] mx-auto px-8 py-5 flex items-center justify-between">

                    <Link
                        to="/"
                        className="text-3xl font-extrabold tracking-tight"
                    >
                        Ryze
                    </Link>

                    <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium text-gray-700">
                        {[
                            { name: "Features", path: "/features" },
                            { name: "Case Studies", path: "/case-studies" },
                            { name: "Pricing", path: "/pricing" },
                            { name: "About us", path: "/about" },
                        ].map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`relative transition
                  ${location.pathname === item.path
                                        ? "text-black font-semibold"
                                        : "hover:text-black"
                                    }`}
                            >
                                {item.name}
                                <span
                                    className={`absolute -bottom-1 left-0 h-[2px]
                    bg-gradient-to-r from-orange-500 to-orange-400
                    transition-all duration-300
                    ${location.pathname === item.path
                                            ? "w-full"
                                            : "w-0 group-hover:w-full"
                                        }`}
                                />
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <Link
                            to="/case-studies"
                            className="hidden md:inline-flex px-5 py-2.5 rounded-lg
                border border-black text-sm font-medium
                hover:bg-black hover:text-white transition"
                        >
                            Book a Demo
                        </Link>

                        <Link
                            to="/features"
                            className="px-5 py-2.5 rounded-lg
                bg-black text-white text-sm font-medium
                hover:scale-[1.04] hover:shadow-lg transition"
                        >
                            Get Started
                        </Link>
                    </div>

                </div>
            </div>
        </header>
    );
}
