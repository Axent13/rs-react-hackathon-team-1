import React from "react";
import PropTypes from "prop-types";
import Button from "../common/Button";

const UserCard = ({ user }) => {
    console.log(user);
    return (
        <div className="relative border-solid rounded-md border-black border-2 p-2">
            <div>Имя: {user.name}</div>
            <div>Возраст: {user.age}</div>
            <div>
                Фотография: <img className="max-w-xs" src={user.photoUrl} />
            </div>
            <div>
                Социальные сети:
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
            <div>О себе: {user.aboutMe}</div>

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
                handleClick={() => console.log("open card")}
            />
            <div className="absolute top-0 right-0 m-2">
                <Button
                    color="yellow"
                    tooltip={"Добавить в избранное"}
                    handleClick={() => console.log("add favorite")}
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
    user: PropTypes.object
};

export default UserCard;
