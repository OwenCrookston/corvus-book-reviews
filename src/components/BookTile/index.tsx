import React from "react";

function BookTile({ data }: { data: BookTile }) {
    const dynamicClasses: string[] = [];
    return (
        <div className={`book-tile ${dynamicClasses.join(" ")}`}>
            <img
                className="book-cover"
                src={data.cover}
                alt={`${data.title} cover`}
                width="200px"
                height="200px"
            />
            <div className="title">{data.title}</div>
            <div className="author">{data.author}</div>
        </div>
    );
}

export default BookTile;
