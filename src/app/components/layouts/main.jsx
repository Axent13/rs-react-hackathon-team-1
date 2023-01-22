import React, { useState, useEffect } from "react";
import api from "../../api";
import { Crumbs } from "../Breadcrumbs";
import Loader from "../common/Loader";
import UserCard from "../ui/userCard";

const Main = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);

    const handleToggleUserFavorite = (userId) => {
        setUsers((prev) =>
            prev.map((u) =>
                u._id === userId ? { ...u, bookmark: !u.bookmark } : u
            )
        );
        api.users.toggleUserBookmarkById(userId).then((data) => setUsers(data));
    };

    return (
        <>
            <Crumbs />
            <div>
                <h1 className="text-5xl font-header text-center text-sky-400 underline my-4">
                    Hackathon React Team 1
                </h1>
                <p className="text-center">
                    Мы - команда целеустермленных начинающих
                    frontend-разработчиков!
                </p>
                <p className="text-center my-3">
                    Несмотря на то, что мы из разных городов, часовых поясов и
                    разных учебных групп - это не ничуть мешает нам вести
                    продуктивную и слаженную работу над нашим проектом! :-)
                </p>
            </div>
            {!users ? (
                <div className="container mx-auto max-w-2xl flex justify-center items-center h-screen">
                    <Loader />
                </div>
            ) : (
                <div className="flex flex-wrap justify-around">
                    {users.map((user) => (
                        <UserCard
                            key={user._id}
                            user={user}
                            handleToggleUserFavorite={handleToggleUserFavorite}
                        />
                    ))}
                </div>
            )}
        </>
    );
};

export default Main;
