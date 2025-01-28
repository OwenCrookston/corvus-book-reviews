import React from "react";

type BookReviewProps = {
    review: BookReview;
    exitReviewClickHandler: () => void;
};
function BookReview({ review, exitReviewClickHandler }: BookReviewProps) {
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
                            src={`${process.env.PUBLIC_URL}/icons/close-x-svgrepo-com.svg`}
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

export default BookReview;
