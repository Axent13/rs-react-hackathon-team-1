import React from "react";
import { Link } from "react-router-dom";

const NavLogo = () => {
    return (
        <div className="flex items-center">
            <Link to={"/"}>
                <img
                    src="https://avatars.dzeninfra.ru/get-zen-logos/200214/pub_622b617eafe23b7233a9fde9_622b62b35e4d0a774e195bf0/scale_2400"
                    alt="Logo"
                    className="w-16 h-16 cursor-pointer filter invert"
                />
            </Link>
            <span className="ml-2">Junior Front End Developer #5</span>
        </div>
    );
};

export default NavLogo;
