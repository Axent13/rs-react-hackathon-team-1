import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const NavItem = ({ text, navigate }) => {
    return (
        <NavLink to={navigate}>
            <div className="cursor-pointer">
                <span className="text-gray-500 hover:text-black ">{text}</span>
            </div>
        </NavLink>
    );
};

NavItem.propTypes = {
    text: PropTypes.string,
    navigate: PropTypes.string
};

export default NavItem;
