import React from "react";
import { BookReview } from "../../reviews/bookReviews";

type BookTileProps = {
    bookTile: BookReview;
    bookTileClickHandler: (reading: BookReview) => void;
};

function BookTile({ bookTile, bookTileClickHandler }: BookTileProps) {
    const dynamicClasses: string[] = [];
    return (
        <div
            className={`book-tile ${dynamicClasses.join(" ")}`}
            onClick={() => bookTileClickHandler(bookTile)}
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
