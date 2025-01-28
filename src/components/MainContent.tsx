import React from "react";
import reviews from "../reviews/reviews.ts";
import { formatReviewKey } from "../util/reviewKeyFormatter.ts";
import BookTile from "./BookTile/BookTile.tsx";
import BookReview from "./BookReview/BookReview.tsx";

type MainContentProps = {
    bookTileClickHandler: (author: string, published: string) => void;
    exitReviewClickHandler: () => void;
    readingReview: string;
};

function MainContent({
    bookTileClickHandler,
    exitReviewClickHandler,
    readingReview,
}: MainContentProps) {
    console.log(readingReview);
    const review = reviews.find(
        (review) =>
            formatReviewKey(review.author, review.published) === readingReview
    );

    return (
        <div className="main-content">
            {review ? (
                <BookReview
                    review={review}
                    exitReviewClickHandler={exitReviewClickHandler}
                />
            ) : (
                reviews.map((review) => {
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
                })
            )}
        </div>
    );
}

export default MainContent;
