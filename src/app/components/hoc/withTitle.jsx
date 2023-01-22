import React from "react";
import PropTypes from "prop-types";
import styles from "../../../style";

const Title = ({ title = "", children }) => {
    return (
        <div
            className={`${styles.flexStartRow} pt-4  w-full bg-gradient-to-r from-primary-2 via-primary-300 to-transparent`} // align-middle
        >
            {title && (
                <h1 className={`${styles.heading3} w-auto items-start`}>
                    {title}
                </h1>
            )}
            {children || ""}
        </div>
    );
};

Title.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ])
};

export default Title;
