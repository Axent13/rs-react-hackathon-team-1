import React from "react";
import { navigate } from "../navigate";
import NavItem from "../NavItem";

const Navigation = () => {
    return (
        <>
            {navigate.map((item) => {
                return (
                    <NavItem
                        key={item.text}
                        text={item.text}
                        navigate={item.nav}
                    />
                );
            })}
        </>
    );
};

export default Navigation;
