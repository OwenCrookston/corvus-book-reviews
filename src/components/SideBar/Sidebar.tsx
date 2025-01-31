import React from "react";
import SearchButton from "./SearchButton.tsx";

type SidebarProps = {
    open: boolean;
    handleSidebarChange: () => void;
};

function Sidebar({ open, handleSidebarChange }: SidebarProps) {
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
                    />
                    <select>
                        <option value="">--Year Read--</option>
                        <option value="2025">2025</option>
                    </select>
                    <div>Top Lists</div>
                </div>
            ) : (
                <SearchButton
                    handleSidebarChange={() => handleSidebarChange()}
                />
            )}
        </div>
    );
}

export default Sidebar;
