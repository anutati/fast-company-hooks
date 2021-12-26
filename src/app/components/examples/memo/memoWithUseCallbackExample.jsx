import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render button");
    });
    return (
        <button className="btn tbn-primary" onClick={onLogOut}>
            Log Out
        </button>
    );
};

LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handleLogOut = () => {
        localStorage.removeItem("auth");
    };
    return (
        <>
            <button className="btn tbn-primary" onClick={setState(!state)}>
                Initiate re-render
            </button>
            <LogOutButton onLogOut={handleLogOut} />
        </>
    );
};

export default MemoWithUseCallbackExample;
