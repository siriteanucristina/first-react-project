import React from "react";

const ReusableButton = props => {
    return (
        <button className={"btn btn-" + props.type} >
            {props.children}
        </button >
    )

};

export default ReusableButton;
