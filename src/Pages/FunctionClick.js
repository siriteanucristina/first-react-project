import React from "react";
import Tool from "./Tool";

function FunctionClick() {
    const handleClick = () => {
        console.log("Buna dimineata!");
    };
    const handleClick2 = () => {
        console.log("Buna ziua!");
    };
    const handleClick3 = () => {
        console.log("Buna seara!");
    };

    return (
        <div className="styletool">
            <Tool name="Vitor" surname="Abc" age="50" tool="Figma" onClick={handleClick}
            />

            <Tool name="Maya" surname="Def" age="25" tool="Figma" onClick={handleClick2}
            />

            <Tool name="Ivona" surname="Mno" age="30" tool="Figma" onClick={handleClick3}
            />
        </div>
    )
}

export default FunctionClick