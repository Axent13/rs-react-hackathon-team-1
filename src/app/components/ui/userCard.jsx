import React from "react";
import PropTypes from "prop-types";

const UserCard = ({ user }) => {
    console.log(user);
    return (
        <div className="border-solid rounded-md border-black border-2 p-2">
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
            <button className="border-solid rounded-sm border-black border-2">
                Открыть
            </button>
            <button className="border-solid rounded-sm border-black border-2">
                Добавить в избранное
            </button>
        </div>
    );
};

UserCard.propTypes = {
    user: PropTypes.object
};

export default UserCard;
