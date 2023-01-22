import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Title from "../hoc/withTitle";
import api from "../../api";
import styles from "../../../style";
import UserPage from "../ui/userPage";
import Slider from "../slider/slider";

const User = () => {
    const params = useParams();
    const userId = params.userId;
    const [user, setUser] = useState();

    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    }, []);

    return (
        <>
            <div
                className={`${styles.boxWidth} ${styles.paddingX}  ${styles.background}`}
            >
                <Title title="Страница Пользователя.">
                    <strong
                        className={`absolute top-0 right-0 text-end text-[8px]`}
                    >
                        Id: {userId}{" "}
                    </strong>
                </Title>
                {user ? <UserPage {...user} /> : <h2>Loading</h2>}
                <div className={` ${styles.marginX} ${styles.paragraph1} p-1`}>
                    <Slider userId={userId} />
                </div>
            </div>
            <div>{/* <MediumFooter /> */}</div>
        </>
    );
};

export default User;
