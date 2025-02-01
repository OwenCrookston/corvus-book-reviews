import React from "react";
import { formatReviewKey } from "../util/reviewKeyFormatter.ts";
import BookTile from "./BookTile/BookTile.tsx";
import Review from "./BookReview/BookReview.tsx";
import { BookReview } from "../reviews/reviews.ts";

type MainContentProps = {
    bookTileClickHandler: (reading: BookReview) => void;
    exitReviewClickHandler: () => void;
    activeReview: BookReview | undefined;
    reviews: BookReview[];
};

function MainContent({
    bookTileClickHandler,
    exitReviewClickHandler,
    activeReview,
    reviews,
}: MainContentProps) {
    return (
        <div className="main-content">
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
