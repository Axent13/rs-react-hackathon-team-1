import React, { useEffect, useState } from "react";
import API from "../../api";
import SliderLine from "./sliderLine/sliderLine";
import PropTypes from "prop-types";

const Slider = ({ userId }) => {
    const [users, setUsers] = useState();
    const [currentIdx, setCurrentIdx] = useState(0);

    useEffect(() => {
        API.users.fetchAll().then((data) => setUsers(data));
    }, []);

    // console.log(users);

    // const isPrevDisabled = currentIdx === 0;
    // const isNextDisabled = currentIdx + 1 === users.length;

    const nextHandler = () => {
        setCurrentIdx((prev) => prev + 1);
    };

    const prevHandler = () => {
        setCurrentIdx((prev) => prev - 1);
    };

    return users ? (
        <div className="mt-24">
            <div className="flex items-center mb-5">
                <div>Другие участники проекта</div>
            </div>
            <SliderLine
                slides={users.filter((user) => user._id !== userId)}
                setCurrentIdx={setCurrentIdx}
                currentIdx={currentIdx}
            />
            <button
                className="m-3"
                disabled={currentIdx === 0 ? "disabled" : null}
                onClick={prevHandler}
            >
                назад
            </button>
            <button
                className="m-3"
                disabled={currentIdx + 2 === users.length ? "disabled" : null}
                onClick={nextHandler}
            >
                вперед
            </button>
        </div>
    ) : (
        "Loading..."
    );
};

Slider.propTypes = {
    userId: PropTypes.string.isRequired
};

export default Slider;
