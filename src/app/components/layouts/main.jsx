import React, { useState, useEffect } from "react";
import api from "../../api";
import UserCard from "../ui/userCard";

const Main = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);

    return (
        <>
            <div>
                <h1 className="text-3xl font-bold">Страница команды</h1>
                <p>Описание команды</p>
            </div>
            <div className="grid grid-cols-3 gap-5">
                {users ? (
                    users.map((user) => <UserCard key={user._id} user={user} />)
                ) : (
                    <h3>Loading</h3>
                )}
            </div>
        </>
    );
};

export default Main;
