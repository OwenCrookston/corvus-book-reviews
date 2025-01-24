import React from "react";
import reviews from "../reviews/reviews.ts";
import BookTile from "./BookTile/index.tsx";

function MainContent() {
    return (
        <div className="main-content">
            <div>I'm the main content</div>
            {reviews.map((review) => {
                return <BookTile data={review} />;
            })}
        </div>
    );
}

export default MainContent;
