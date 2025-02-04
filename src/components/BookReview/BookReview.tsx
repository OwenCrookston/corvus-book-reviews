import React from "react";
import { BookReview } from "../../reviews/bookReviews";

type BookReviewProps = {
    review: BookReview;
    exitReviewClickHandler: () => void;
};
function Review({ review, exitReviewClickHandler }: BookReviewProps) {
    return (
        <div className="book-review-container">
            <div className="book-review">
                <div className="flex-last-right">
                    <div className="review-title">{review.title}</div>
                    <button
                        className="close-button"
                        type="button"
                        onClick={() => exitReviewClickHandler()}
                    >
                        <img
                            src={"./icons/close-x-svgrepo-com.svg"}
                            alt="close"
                        />
                    </button>
                </div>
                <div className="review-author">{review.author}</div>
                <div className="review-date">Reviewed {review.date}</div>
                <div className="review-content">{review.content}</div>
            </div>
        </div>
    );
}

export default Review;
