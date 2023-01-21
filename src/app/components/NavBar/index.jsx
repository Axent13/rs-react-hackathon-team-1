import React, { useState } from "react";
import MenuCloseIcon from "./MenuIcons/MenuCloseIcon";
import MenuIcon from "./MenuIcons/MenuIcon";
import MobilMenu from "./MobilMenu";
import Navigation from "./Navigation";
import NavLogo from "./NavLogo";

const NavBar = () => {
    const [isMobilMenuOpen, setMobilMenuOpen] = useState(false);
    return (
        <header className="flex items-center">
            <NavLogo />
            <nav className="hidden md:flex space-x-10 ml-auto">
                <Navigation />
            </nav>
            <div
                className="flex md:hidden ml-auto cursor-pointer z-30"
                onClick={() => setMobilMenuOpen(!isMobilMenuOpen)}
            >
                {isMobilMenuOpen ? <MenuCloseIcon /> : <MenuIcon />}
            </div>
            <MobilMenu isOpen={isMobilMenuOpen} />
        </header>
    );
};

export default NavBar;
