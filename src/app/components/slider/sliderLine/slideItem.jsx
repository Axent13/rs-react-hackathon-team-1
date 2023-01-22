import React, { useRef } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router";
import { isHttp } from "../../../utils/checkFunc";

const SlideItem = ({ slide, isActive, clickHandler }) => {
    // const inputRef = useRef(null);
    // const history = useHistory();

    // const clickHandler = (slide) => {
    //     // console.log(inputRef.current);
    //     // history.push(`/user/${slide._id}`);
    //     return slide._id;
    // };

    const phUrl = isHttp(slide.photoUrl)
        ? slide.photoUrl
        : "../" + slide.photoUrl;

    return (
        <button
            onClick={
                () => clickHandler(slide._id)
                // isActive
                //     ? () => {
                //           clickHandler(slide._id);
                //       }
                //     : null
            }
            // ref={inputRef}
            className={`relative mr-8 tarnsition-all duration-300 ease-in-out ${
                isActive ? "-top-4 h-50 w-50" : "h-40 w-40"
            }`}
        >
            <div
                className={`bg-cover bg-no-repeat bg-center h-40 w-40 rounded-[50%]
                
                 `}
                // bg-cover ${ isActive ? "h-50 w-50" : "h-40 w-40"}
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
