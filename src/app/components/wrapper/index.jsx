import React from "react";
import PropTypes from "prop-types";

const Wrapper = ({ children }) => {
    return (
        <div className="container mx-auto py-4 px-2 min-h-screen">
            {children}
        </div>
    );
};

Wrapper.propTypes = {
    children: PropTypes.element
};
export default Wrapper;
