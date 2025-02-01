import React, { useEffect, useState } from "react";
import "./App.css";
import MainContent from "./components/MainContent.tsx";
import Sidebar from "./components/SideBar/Sidebar.tsx";
import reviewLibrary, { BookReview } from "./reviews/bookReviews.ts";

function App() {
    const [sidebarOpen, setSidebar] = useState<boolean>(false);
    const dynamicClasses: string[] = [];
    const [readingReview, setReadingReview] = useState<BookReview | undefined>(
        undefined
    );
    const [searching, setSearching] = useState<string>("");
    const [reviewYear, setReviewYear] = useState<undefined | number>(undefined);
    const [matchingReviews, setMatchingReviews] =
        useState<BookReview[]>(reviewLibrary);

    useEffect(() => {
        setMatchingReviews(
            reviewLibrary.filter((review) => {
                const titleOrAuthorMatch =
                    review.title
                        .toLowerCase()
                        .includes(searching.toLowerCase()) ||
                    review.author
                        .toLowerCase()
                        .includes(searching.toLowerCase());
                const yearMatch = reviewYear
                    ? review.yearReviewed === reviewYear
                    : true;

                return titleOrAuthorMatch && yearMatch;
            })
        );
    }, [searching, reviewYear]);

    sidebarOpen ? dynamicClasses.push("open") : dynamicClasses.push("closed");
    if (readingReview !== undefined) dynamicClasses.push("reading-review");

    const bookTileClickHandler = (reading: BookReview) => {
        setReadingReview(reading);
    };

    const exitReviewClickHandler = () => {
        setReadingReview(undefined);
    };

    const handleSidebarChange = () => {
        setSidebar(!sidebarOpen);
    };

    const handleSearch = (searching: string) => {
        setSearching(searching);
    };

    const handleChangeReviewYear = (year: string) => {
        setReviewYear(year ? Number(year) : undefined);
    };

    return (
        <div className={`App ${dynamicClasses.join(" ")}`}>
            {!readingReview && (
                <Sidebar
                    open={sidebarOpen}
                    handleSidebarChange={handleSidebarChange}
                    searching={searching}
                    handleSearch={handleSearch}
                    handleYearChange={handleChangeReviewYear}
                />
            )}
            <MainContent
                bookTileClickHandler={bookTileClickHandler}
                exitReviewClickHandler={exitReviewClickHandler}
                activeReview={readingReview}
                reviews={matchingReviews}
            />
        </div>
    );
}

export default App;
