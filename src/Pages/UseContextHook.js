import React from "react";
import CaseBook from "./CaseBook";

const Feature = [
    {
        id: 1,
        title: 'Se numea Sarah',
        author: 'Tatiana de Rosnay',
    },
    {
        id: 2,
        title: 'Se numea Sarah',
        author: 'Tatiana de Rosnay'
    }
];

const UseContextHook = () => {
    return (
        <div>
            <CaseBook list={Feature} />
        </div>
    )
}

export default UseContextHook;