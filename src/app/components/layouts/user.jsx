import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Title from "../hoc/withTitle";
import api from "../../api";
import styles from "../../../style";
import UserPage from "../ui/userPage";
import Slider from "../slider/slider";
import { Crumbs } from "../Breadcrumbs";

const User = () => {
    const params = useParams();
    const userId = params.userId;
    const [user, setUser] = useState();

    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    }, [userId]);

    return (
        <>
            {user ? <Crumbs id={userId} name={user.name} /> : ""}
            <div className={`${styles.boxWidth} ${styles.paddingX}`}>
                <Title title="Страница Пользователя." />
                {user ? <UserPage {...user} /> : <h2>Loading</h2>}
                <div className={` ${styles.marginX} ${styles.paragraph1} p-1`}>
                    <Slider userId={userId} />
                </div>
            </div>
        </>
    );
};

export default User;
