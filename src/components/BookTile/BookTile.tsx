import React from "react";

type BookTileProps = {
    bookTile: BookTile;
    bookTileClickHandler: (author: string, published: string) => void;
};

function BookTile({ bookTile, bookTileClickHandler }: BookTileProps) {
    const dynamicClasses: string[] = [];
    return (
        <div
            className={`book-tile ${dynamicClasses.join(" ")}`}
            onClick={() =>
                bookTileClickHandler(bookTile.author, bookTile.published)
            }
        >
            <img
                className="book-cover"
                src={bookTile.cover}
                alt={`${bookTile.title} cover`}
            />
        </div>
    );
}

export default BookTile;
