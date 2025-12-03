import React from "react";
import { navLinks } from "../constants";

const NavBar: React.FC = () => {
    return (
        <>
            <header className="bg-green-950/20 backdrop-blur-lg max-w-7xl mx-auto min-h-16 flex items-center justify-center rounded-full fixed top-4 left-0 right-0 z-50">
                <nav>
                    <ul className="flex items-center justify-center gap-8">
                        {navLinks.map(({ label }) => (
                            <li key={label}>
                                <a href={label} className="text-white">{label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
            <div className="h-16 mt-4" />
        </>
    )
}
export default NavBar
