import React, { PointerEvent, useEffect } from "react";
import { formatReviewKey } from "../util/reviewKeyFormatter.ts";
import BookTile from "./BookTile/BookTile.tsx";
import Review from "./BookReview/BookReview.tsx";
import { BookReview } from "../reviews/bookReviews.ts";

type MainContentProps = {
    bookTileClickHandler: (
        reading: BookReview,
        e: PointerEvent,
        bookTileRef: React.RefObject<null>
    ) => void;
    exitReviewClickHandler: () => void;
    activeReview: BookReview | undefined;
    reviews: BookReview[];
    scrollRef: React.RefObject<null | HTMLDivElement>;
    coordinates: [x: number, y: number];
};

function MainContent({
    bookTileClickHandler,
    exitReviewClickHandler,
    activeReview,
    reviews,
    scrollRef,
    coordinates,
}: MainContentProps) {
    const dynamicClasses = ["main-content"];
    if (activeReview) dynamicClasses.push("reading-review");

    useEffect(() => {
        if (scrollRef && scrollRef.current) {
            if (!activeReview) {
                scrollRef.current.scrollTo(coordinates[0], coordinates[1]);
            } else {
                scrollRef.current.scrollTo(0, 0);
            }
        }
    }, [activeReview, coordinates, scrollRef]);

    return (
        <div className={dynamicClasses.join(" ")}>
            {!!activeReview ? (
                <Review
                    review={activeReview}
                    exitReviewClickHandler={exitReviewClickHandler}
                />
            ) : (
                <div className="book-tiles-container">
                    {reviews.map((review) => {
                        return (
                            <BookTile
                                key={formatReviewKey(
                                    review.author,
                                    review.published
                                )}
                                bookTile={review}
                                bookTileClickHandler={bookTileClickHandler}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default MainContent;
