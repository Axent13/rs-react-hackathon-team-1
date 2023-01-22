import React from "react";
import PropTypes from "prop-types";
import { navigate } from "../navigate";
import NavItem from "../NavItem";

const Navigation = ({ onCloseMobilMenu }) => {
    return (
        <>
            {navigate.map((item) => {
                return (
                    <div key={item.text} onClick={() => onCloseMobilMenu()}>
                        <NavItem
                            key={item.text}
                            text={item.text}
                            navigate={item.nav}
                        />
                    </div>
                );
            })}
        </>
    );
};

Navigation.propTypes = {
    onCloseMobilMenu: PropTypes.func
};
export default Navigation;
