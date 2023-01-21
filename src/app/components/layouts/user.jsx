import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import Loader from "../common/Loader";

const User = () => {
    const params = useParams();
    const userId = params.userId;
    const [user, setUser] = useState();

    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    });

    return (
        <div>
            <h2>
                Страница Пользователя. <strong>Id: {userId} </strong>
                {user ? (
                    <div>
                        <div>Имя: {user.name}</div>
                        <div>Возраст: {user.age}</div>
                        <div>О себе: {user.aboutMe}</div>
                        <div>
                            Фотография:{" "}
                            <img
                                className="max-w-xs"
                                src={`../${user.photoUrl}`}
                            />
                        </div>
                        <div>
                            Социальные сети:{" "}
                            {user.socials.map((social) => (
                                <div className="max-w-[40px]" key={social.name}>
                                    <a
                                        href={social.link}
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src={`../${social.iconUrl}`}
                                            alt={social.name}
                                        />
                                    </a>
                                </div>
                            ))}
                        </div>
                        <div>
                            Чем занимался:
                            <ul>
                                {user.tasks.map((task) => (
                                    <li key={task}>{task}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            Навыки:
                            <ul>
                                {user.skills.map((skill) => (
                                    <li key={skill}>Прогресс-бар {skill} </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            Баджи/значки:{" "}
                            <ul>
                                {user.badges.map((badge) => (
                                    <li key={badge}>Бадж {badge.text} </li>
                                ))}
                            </ul>
                        </div>
                        <div>Слайдер</div>
                    </div>
                ) : (
                    <div className="container mx-auto max-w-2xl flex justify-center items-center h-screen">
                        <Loader />
                    </div>
                )}
            </h2>
        </div>
    );
};

export default User;
