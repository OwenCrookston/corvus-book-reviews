import React from "react";

function BookTile({ data }: { data: BookTile }) {
    const dynamicClasses: string[] = [];
    return (
        <div className={`Booktile ${dynamicClasses.join(" ")}`}>
            <img
                class="fit-picture"
                src="/media/cc0-images/grapefruit-slice-332-332.jpg"
                alt="Grapefruit slice atop a pile of other slices"
            />
            <div className="title">{data.title}</div>
            <div className="author">{data.author}</div>
        </div>
    );
}

export default BookTile;
