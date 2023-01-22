import React from "react";
import PropTypes from "prop-types";

const Button = ({ label, rounded, color, handleClick, tooltip, children }) => {
    return (
        <button
            type="button"
            className={`inline-flex w-full items-center justify-center py-4 px-4 leading-6 shadow text-lg font-medium ${
                rounded || ""
            } text-white bg-${color}-500 hover:scale-105 focus:outline-none my-2 transition-all`}
            onClick={handleClick}
            title={tooltip}
        >
            {label || children || "button"}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string,
    rounded: PropTypes.string,
    handleClick: PropTypes.func.isRequired,
    color: PropTypes.string.isRequired,
    tooltip: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ])
};

export default Button;
