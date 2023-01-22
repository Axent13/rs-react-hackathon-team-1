import React, { useState } from "react";
import PropTypes from "prop-types";
import MenuCloseIcon from "./MenuIcons/MenuCloseIcon";
import MenuIcon from "./MenuIcons/MenuIcon";
import MobilMenu from "./MobilMenu";
import Navigation from "./Navigation";
import NavLogo from "./NavLogo";

const NavBar = ({ children }) => {
    const [isMobilMenuOpen, setMobilMenuOpen] = useState(false);
    const handleCloseMobilMenu = () => {
        return setMobilMenuOpen(!isMobilMenuOpen);
    };

    return (
        <>
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
                <MobilMenu
                    isOpen={isMobilMenuOpen}
                    onCloseMobilMenu={handleCloseMobilMenu}
                />
            </header>
            {children}
        </>
    );
};

NavBar.propTypes = {
    children: PropTypes.element
};

export default NavBar;
