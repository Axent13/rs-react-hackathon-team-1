import React from "react";
import PropTypes from "prop-types";
import { isHttp } from "../../../utils/checkFunc";

const SlideItem = ({ slide, isActive, clickHandler }) => {
    const phUrl = isHttp(slide.photoUrl)
        ? slide.photoUrl
        : "../" + slide.photoUrl;

    return (
        <button
            onClick={() => clickHandler(slide._id)}
            className={`relative mx-4 tarnsition-all duration-300 ease-in-out hover:-translate-y-2 ${
                isActive ? "h-50 w-50" : "h-40 w-40"
            }`}
        >
            <div
                className={`bg-cover bg-no-repeat bg-center h-40 w-40 rounded-[50%]`}
                style={{
                    backgroundImage: `url(${phUrl})`
                }}
            ></div>
        </button>
    );
};

SlideItem.propTypes = {
    slide: PropTypes.object.isRequired,
    clickHandler: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired
};

export default SlideItem;
