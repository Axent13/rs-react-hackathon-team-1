import React from "react";
import PropTypes from "prop-types";

const Badge = ({ text, color }) => {
    const renderIcons = () => {
        if (text === "Ученики") {
            return (
                <img
                    src={"/assets/icons/academicCap.svg"}
                    className="h-6 w-6 text-blue-500"
                />
            );
        }
        if (text === "36 группа (Премиум)") {
            return (
                <img
                    src={"/assets/icons/userGroup.svg"}
                    className="h-6 w-6 text-blue-500"
                />
            );
        }
        if (text === "Хакатон React team 1") {
            return (
                <img
                    src={"/assets/icons/share.svg"}
                    className="h-6 w-6 text-blue-500"
                />
            );
        }
    };

    return (
        <span
            className={`inline-block ${color} text-white text-xs px-1 px-3 rounded-full`}
        >
            {renderIcons()}
            {text}
        </span>
    );
};

Badge.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
};

export default Badge;
