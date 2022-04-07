import React from "react";
import Book from "./Book";

const CaseBook = ({ list }) => {
    return (
        <ol>
            {list.map((item) => (
                <Book key={item.id} item={item} />
            ))}
        </ol>
    );
}

export default CaseBook;