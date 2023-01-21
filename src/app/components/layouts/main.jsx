import React, { useState, useEffect } from "react";
import api from "../../api";
import Loader from "../Loader";
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
                    <div className="container mx-auto max-w-2xl mt-[65px] flex justify-center h-screen">
                        <Loader />
                    </div>
                )}
            </div>
        </>
    );
};

export default Main;
