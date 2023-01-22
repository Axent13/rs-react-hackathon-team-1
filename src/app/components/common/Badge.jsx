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
        if (text.includes("группа")) {
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
        <div
            className={`flex ${color} text-white px-4 rounded-full items-center text-2xl p-2 mr-2`}
        >
            {renderIcons()}
            <span className="pl-2">{text}</span>
        </div>
    );
};

Badge.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
};

export default Badge;
