import React from "react";
import SearchButton from "./SearchButton.tsx";

type SidebarProps = {
    open: boolean;
    handleSidebarChange: () => void;
    searching: string;
    handleSearch: (searching: string) => void;
    yearSearch: number | undefined;
    handleYearChange: (year: string) => void;
};

function Sidebar({
    open,
    handleSidebarChange,
    searching,
    yearSearch,
    handleSearch,
    handleYearChange,
}: SidebarProps) {
    const dynamicClasses: string[] = [];
    open ? dynamicClasses.push("open") : dynamicClasses.push("closed");

    return (
        <div className="sidebar-container">
            {open ? (
                <div className={`sidebar ${dynamicClasses.join(" ")}`}>
                    <div className="search-icon-row">
                        <SearchButton
                            handleSidebarChange={() => handleSidebarChange()}
                        />
                        Search
                    </div>
                    <input
                        type="search"
                        placeholder="Title / Author"
                        maxLength={30}
                        value={searching}
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                    <select
                        value={yearSearch}
                        onChange={(e) => handleYearChange(e.target.value)}
                    >
                        <option value="">--Year Read--</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                    </select>
                    {/* <div>Top Lists</div> */}
                </div>
            ) : (
                <div className="closed-search-button">
                    <SearchButton
                        handleSidebarChange={() => handleSidebarChange()}
                    />
                </div>
            )}
        </div>
    );
}

export default Sidebar;
