import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router";

const SlideItem = ({ slide, isActive }) => {
    const history = useHistory();

    const clickHandler = (slide) => {
        history.push(`/user/${slide._id}`);
    };

    return (
        <button
            onClick={
                isActive
                    ? () => {
                          clickHandler(slide);
                      }
                    : null
            }
            className={`block relative mr-8 tarnsition-all duration-300 ease-in-out ${
                isActive ? "w-52 h-full" : "w-40 h-24 cursor-not-allowed"
            }`}
        >
            <div
                className="bg-cover bg-no-repeat bg-center h-full"
                style={{
                    backgroundImage: `url(/${slide.photoUrl})`
                }}
            />
        </button>
    );
};

SlideItem.propTypes = {
    slide: PropTypes.object.isRequired,
    clickHandler: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired
};

export default SlideItem;
