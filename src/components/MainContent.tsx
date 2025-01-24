import React from "react";
import reviews from "../reviews/reviews.ts";
import BookTile from "./BookTile/index.tsx";

function MainContent() {
    return (
        <div className="main-content">
            {reviews.map((review) => {
                return <BookTile key={review.date} data={review} />;
            })}
        </div>
    );
}

export default MainContent;
