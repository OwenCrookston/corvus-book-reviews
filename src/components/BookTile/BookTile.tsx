import React, { PointerEvent, useRef } from "react";
import { BookReview } from "../../reviews/bookReviews";

type BookTileProps = {
    bookTile: BookReview;
    bookTileClickHandler: (
        reading: BookReview,
        e: PointerEvent,
        bookTileRef: React.RefObject<null>
    ) => void;
};

function BookTile({ bookTile, bookTileClickHandler }: BookTileProps) {
    const dynamicClasses: string[] = [];
    const bookTileRef = useRef(null);

    return (
        <div
            ref={bookTileRef}
            className={`book-tile ${dynamicClasses.join(" ")}`}
            onClick={(e: PointerEvent<HTMLDivElement>) =>
                bookTileClickHandler(bookTile, e, bookTileRef)
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
