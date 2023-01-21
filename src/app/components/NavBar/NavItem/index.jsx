import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavItem = ({ text, navigate }) => {
    return (
        <Link to={navigate}>
            <div className="cursor-pointer">
                <span className="text-gray-500 hover:text-black ">{text}</span>
            </div>
        </Link>
    );
};

NavItem.propTypes = {
    text: PropTypes.string,
    navigate: PropTypes.string
};

export default NavItem;
