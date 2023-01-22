import React, { useEffect, useState } from "react";
import API from "../../api";
import { useHistory } from "react-router";
import SliderLine from "./sliderLine/sliderLine";
import PropTypes from "prop-types";

const Slider = ({ userId }) => {
    const history = useHistory();

    const [users, setUsers] = useState();
    const [arrIdUsers, setArrIdUsers] = useState([]);
    const [currentIdx, setCurrentIdx] = useState(0);

    useEffect(() => {
        API.users.fetchAll().then((data) => setUsers(data));
    }, [userId]);

    useEffect(() => {
        if (users) {
            const arr = [];
            users.forEach((user) => {
                // console.log(user._id);
                arr.push(user._id);
            });
            setArrIdUsers(arr);
            // console.log(arr);
            setCurrentIdx(arr.findIndex((id) => id === userId || 0));
        }
    }, [users]);

    // console.log(users);

    // const isPrevDisabled = currentIdx === 0;
    // const isNextDisabled = currentIdx + 1 === users.length;

    const nextHandler = () => {
        setCurrentIdx((prev) =>
            prev + 1 > arrIdUsers.length - 1 ? 0 : prev + 1
        );
    };

    const prevHandler = () => {
        setCurrentIdx((prev) =>
            prev - 1 < 0 ? arrIdUsers.length - 1 || 0 : prev - 1
        );
    };

    const setCurHandler = (_userId) => {
        // console.log(userId);
        setCurrentIdx(arrIdUsers.findIndex((id) => id === _userId || 0));
        history.push(`/user/${_userId}`);
    };

    const getNearArr = (curId) => {
        const getPrev = (_n) => {
            return _n - 1 < 0 ? arrIdUsers.length - 1 || 0 : _n - 1;
        };
        const getNext = (_n) => {
            return _n + 1 > arrIdUsers.length - 1 ? 0 : _n + 1;
        };
        const arr = [curId];
        for (let index = 0; index < 1; index++) {
            arr.unshift(getPrev(curId - index));
            arr.push(getNext(curId + index));
        }

        const _user = arr.map((n) => {
            return users.find((u) => u._id === arrIdUsers[n]);
        });

        return _user;
    };

    // if (users && arrIdUsers.length) {
    //     console.log(getNearArr(currentIdx));
    // }

    return users && arrIdUsers.length ? (
        <div className="mt-2">
            <div className="flex items-center mb-16 p-4">
                <div>Другие участники проекта</div>
            </div>
            <div className="flex flex-row justify-center items-center">
                <div className="w-40 h-full pr-5 bg-slate-50">
                    <button
                        className="m-5"
                        disabled={currentIdx === 0 ? "disabled" : null}
                        onClick={prevHandler}
                    >
                        <img
                            src={"../assets/icons/back.svg"}
                            className="rounded-lg"
                            alt="назад"
                            width={80}
                            height={80}
                        />
                        {/* назад */}
                    </button>
                </div>
                <div>
                    <SliderLine
                        // slides={users.filter((user) => user._id !== userId)}
                        slides={getNearArr(currentIdx)}
                        setCurrentIdx={setCurHandler}
                        currentIdx={currentIdx}
                    />
                </div>
                <div className="w-40 h-full pl-5 bg-slate-50">
                    <button
                        className="m-5"
                        disabled={
                            currentIdx + 2 === users.length ? "disabled" : null
                        }
                        onClick={nextHandler}
                    >
                        <img
                            src={"../assets/icons/forward.svg"}
                            className="rounded-lg"
                            alt="вперед"
                            width={80}
                            height={80}
                        />
                        {/* вперед */}
                    </button>
                </div>
            </div>
        </div>
    ) : (
        "Loading..."
    );
};

Slider.propTypes = {
    userId: PropTypes.string.isRequired
};

export default Slider;
