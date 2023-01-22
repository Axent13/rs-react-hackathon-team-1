import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavItem = ({ text, navigate }) => {
    return (
        <Link to={navigate}>
            <div className="cursor-pointer">
                <span className="hover:md:text-white hover:text-zinc-600">
                    {text}
                </span>
            </div>
        </Link>
    );
};

NavItem.propTypes = {
    text: PropTypes.string,
    navigate: PropTypes.string
};

export default NavItem;
