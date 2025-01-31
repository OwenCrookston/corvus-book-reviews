import "./App.css";
import React from "react";
import MainContent from "./components/MainContent.tsx";
import Sidebar from "./components/SideBar/Sidebar.tsx";
import { useState } from "react";
import { formatReviewKey } from "./util/reviewKeyFormatter.ts";

function App() {
    const [sidebarOpen, setSidebar] = useState(false);
    const dynamicClasses: string[] = [];
    const [readingReview, setReadingReview] = useState("");
    const bookTileClickHandler = (author: string, published: string) => {
        setReadingReview(formatReviewKey(author, published));
    };

    sidebarOpen ? dynamicClasses.push("open") : dynamicClasses.push("closed");
    if (readingReview !== "") dynamicClasses.push("reading-review");

    const exitReviewClickHandler = () => {
        setReadingReview("");
    };

    const handleSidebarChange = () => {
        setSidebar(!sidebarOpen);
    };

    return (
        <div className={`App ${dynamicClasses.join(" ")}`}>
            {!readingReview && (
                <Sidebar
                    open={sidebarOpen}
                    handleSidebarChange={handleSidebarChange}
                />
            )}
            <MainContent
                bookTileClickHandler={bookTileClickHandler}
                exitReviewClickHandler={exitReviewClickHandler}
                readingReview={readingReview}
            />
        </div>
    );
}

export default App;
