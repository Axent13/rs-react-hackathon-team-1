import React, { useEffect, useState } from "react";
import API from "../../api";
import Loader from "../common/Loader";
import UserCard from "../ui/userCard";

const Favorites = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
        API.users
            .fetchAll()
            .then((data) => setUsers(data.filter((u) => u.bookmark)));
    }, [users]);

    const handleToggleUserFavorite = (userId) => {
        setUsers((prev) =>
            prev.map((u) =>
                u._id === userId ? { ...u, bookmark: !u.bookmark } : u
            )
        );
        API.users.toggleUserBookmarkById(userId).then((data) => setUsers(data));
    };

    return (
        <>
            <div>
                <h1 className="text-3xl font-bold">Избранное</h1>
            </div>
            {!users ? (
                <div className="container mx-auto max-w-2xl flex justify-center items-center h-screen">
                    <Loader />
                </div>
            ) : (
                <div className="grid grid-cols-3 gap-5">
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

export default Favorites;
