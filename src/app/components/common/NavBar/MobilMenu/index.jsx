import React from "react";
import PropTypes from "prop-types";
import Navigation from "../Navigation";

const MobilMenu = ({ isOpen = false, onCloseMobilMenu }) => {
    return (
        <div className="flex md:hidden">
            <div
                className={`absolute top-0 left-0 right-0 bg-gray-400 opacity-50 z-10 min-h-[150vh] ${
                    isOpen ? "flex" : "hidden"
                }`}
                onClick={() => onCloseMobilMenu()}
            />
            <div
                className={`absolute right-0 top-0 w-1/2 bg-white z-20 justify-center min-h-[150vh] ${
                    isOpen ? "flex" : "hidden"
                }`}
            >
                <nav className="my-20 mx-5 space-y-5 text-lg w-full text-sky-500 ">
                    <Navigation onCloseMobilMenu={onCloseMobilMenu} />
                </nav>
            </div>
        </div>
    );
};

MobilMenu.propTypes = {
    isOpen: PropTypes.bool,
    onCloseMobilMenu: PropTypes.func
};

export default MobilMenu;
