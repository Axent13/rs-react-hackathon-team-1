import React, { useEffect, useState } from "react";
import API from "../../api";
import { Crumbs } from "../common/Breadcrumbs";
import Loader from "../common/Loader";
import UserCard from "../ui/userCard";

const Favorites = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
        API.users.fetchAll().then((data) => setUsers(data));
    }, []);

    const handleToggleUserFavorite = (userId) => {
        setUsers((prev) =>
            prev.map((u) =>
                u._id === userId ? { ...u, bookmark: !u.bookmark } : u
            )
        );
        API.users.toggleUserBookmarkById(userId).then((data) => setUsers(data));
    };
    const filterUsers = (data) => {
        if (users) return data.filter((u) => u.bookmark);
    };

    const filteredUsers = filterUsers(users);

    return (
        <>
            <Crumbs />
            <div className="my-2">
                <h1 className="text-3xl font-bold">Избранное</h1>
            </div>
            {!filteredUsers ? (
                <div className="container mx-auto max-w-2xl flex justify-center items-center h-screen">
                    <Loader />
                </div>
            ) : filteredUsers.length === 0 ? (
                <div className="container mx-auto max-w-2xl flex justify-center items-center flex-col h-screen">
                    <div>
                        <img
                            className="h-16 invert"
                            src="https://i.ibb.co/cy1nprz/empty-1.png"
                            alt="empty"
                        />
                    </div>
                    <div>Тут пока пусто</div>
                </div>
            ) : (
                <div className="flex flex-wrap justify-around">
                    {filteredUsers.map((user) => (
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

export default Favorites;
