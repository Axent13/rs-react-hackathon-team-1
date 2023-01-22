import React from "react";
import SlideItem from "./slideItem";
import PropTypes from "prop-types";

const SliderLine = ({ slides, setCurrentIdx, currentIdx }) => {
    return (
        <div className="flex items-end h-32 transition-all duration-300 ease-linear">
            {slides.map((slide, idx) => {
                const isActive = idx === currentIdx;
                return (
                    <SlideItem
                        key={slide._id}
                        slide={slide}
                        isActive={isActive}
                    />
                );
            })}
        </div>
    );
};

SliderLine.propTypes = {
    slides: PropTypes.array.isRequired,
    setCurrentIdx: PropTypes.func.isRequired,
    currentIdx: PropTypes.number.isRequired
};

export default SliderLine;
