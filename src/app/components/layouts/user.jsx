import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";

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
                            <img className="max-w-xs" src={user.photoUrl} />
                        </div>
                        <div>Социальные сети: {user.socials}</div>
                        <div>Чем занимался: {user.tasks}</div>
                        <div>Навыки: {user.skills}</div>
                        <div>Статусы: {user.badges}</div>
                        <div>Портфолио: {user.portfolio}</div>
                    </div>
                ) : (
                    <h3>Loading</h3>
                )}
            </h2>
        </div>
    );
};

export default User;
