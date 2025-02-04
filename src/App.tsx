import React, { useEffect, useRef, useState, PointerEvent } from "react";
import "./App.css";
import MainContent from "./components/MainContent.tsx";
import Sidebar from "./components/SideBar/Sidebar.tsx";
import reviewLibrary, { BookReview } from "./reviews/bookReviews.ts";
import { getEmValue } from "./util/getEmIntoPx.ts";

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
    const [coordinates, setCoordinates] = useState<[x: number, y: number]>([
        0, 0,
    ]);
    const appRef = useRef<null | HTMLDivElement>(null);

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

    const bookTileClickHandler = (
        reading: BookReview,
        e: PointerEvent,
        bookTileRef: React.RefObject<null | HTMLDivElement>
    ) => {
        setReadingReview(reading);
        // this will be used to scroll to the same (ish) place in the review list when exiting a review
        if (bookTileRef && bookTileRef.current) {
            const emIntoPx = getEmValue("div");
            setCoordinates([
                e.clientX,
                bookTileRef.current.offsetTop - 3 * emIntoPx,
            ]);
        }
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
        <div className={`App ${dynamicClasses.join(" ")}`} ref={appRef}>
            {!readingReview && (
                <Sidebar
                    open={sidebarOpen}
                    handleSidebarChange={handleSidebarChange}
                    searching={searching}
                    yearSearch={reviewYear}
                    handleSearch={handleSearch}
                    handleYearChange={handleChangeReviewYear}
                />
            )}
            <MainContent
                bookTileClickHandler={bookTileClickHandler}
                exitReviewClickHandler={exitReviewClickHandler}
                activeReview={readingReview}
                reviews={matchingReviews}
                scrollRef={appRef}
                coordinates={coordinates}
            />
        </div>
    );
}

export default App;
