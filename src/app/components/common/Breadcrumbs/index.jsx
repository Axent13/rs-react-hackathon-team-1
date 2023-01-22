import React from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import HomeIcon from "./HomeIcon";
import NavigateNextIcon from "./NavigateNextIcon";

export const Crumbs = ({ name, id }) => {
    const { pathname } = useLocation();
    return (
        <nav className="bg-grey-light rounded-md w-full my-4">
            <ol className="list-reset flex content-center ">
                <li>
                    {pathname !== `/` ? (
                        <a
                            href="/"
                            className="hover:text-white flex content-center items-baseline"
                        >
                            <HomeIcon /> <span className="pl-2">Главная</span>
                        </a>
                    ) : (
                        <div className="flex content-center items-baseline">
                            <HomeIcon /> <span className="pl-2">Главная</span>
                        </div>
                    )}
                </li>
                <li>
                    {pathname === `/user/${id}` ? (
                        <div className="flex content-center">
                            <NavigateNextIcon />
                            <span>Участник - {name}</span>
                        </div>
                    ) : (
                        ""
                    )}
                </li>
                <li>
                    {pathname === `/favorites` ? (
                        <div className="flex content-center">
                            <NavigateNextIcon />
                            <span>Избранные</span>
                        </div>
                    ) : (
                        ""
                    )}
                </li>
            </ol>
        </nav>
    );
};

Crumbs.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string
};
