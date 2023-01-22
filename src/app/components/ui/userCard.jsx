import React from "react";
import PropTypes from "prop-types";
import Button from "../common/Button";
import { useHistory } from "react-router";

const UserCard = ({ user, handleToggleUserFavorite }) => {
    const history = useHistory();
    return (
        <div className="relative border-solid rounded-md border-black border-2 p-2">
            <div className="shadow">
                <img
                    className="max-w-xs mx-auto rounded-lg"
                    src={user.photoUrl}
                />
            </div>
            <div className="my-4 flex justify-center">
                {user.socials.map((social) => (
                    <div className="max-w-[40px]" key={social.name}>
                        <a
                            href={social.link}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <img src={social.iconUrl} alt={social.name} />
                        </a>
                    </div>
                ))}
            </div>
            <div>
                <span className="underline">Имя:</span> {user.name}
            </div>
            <div>
                <span className="underline">Возраст:</span> {user.age}
            </div>

            <div>
                <span className="underline">О себе:</span> {user.aboutMe}
            </div>

            {/* button потом заменить на компонент Кнопки */}
            {/* <button className="border-solid rounded-sm border-black border-2">
                Открыть
            </button>
            <button className="border-solid rounded-sm border-black border-2">
                Добавить в избранное
            </button> */}
            <Button
                label="Открыть"
                color="indigo"
                rounded="rounded-md"
                handleClick={() => history.push(`/user/${user._id}`)}
            />
            <div className="absolute top-0 right-0 m-2">
                <Button
                    color="yellow"
                    tooltip={"Добавить в избранное"}
                    handleClick={() => handleToggleUserFavorite(user._id)}
                    rounded="rounded-full"
                >
                    <img
                        className="w-6"
                        src={
                            user.bookmark
                                ? "/assets/icons/star-solid.svg"
                                : "/assets/icons/star.svg"
                        }
                        alt="favorite"
                    />
                </Button>
            </div>
        </div>
    );
};

UserCard.propTypes = {
    user: PropTypes.object,
    handleToggleUserFavorite: PropTypes.func
};

export default UserCard;
