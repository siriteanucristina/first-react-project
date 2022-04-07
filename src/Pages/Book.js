import React from "react";

const Book = ({ item }) => {
    return (
        <li>
            {item.title} {item.author}
        </li>
    );
}

export default Book; 