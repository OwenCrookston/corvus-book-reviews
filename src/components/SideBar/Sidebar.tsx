import React from "react";
import SearchButton from "./SearchButton.tsx";

type SidebarProps = {
    open: boolean;
    handleSidebarChange: () => void;
};

function Sidebar({ open, handleSidebarChange }: SidebarProps) {
    const dynamicClasses: string[] = [];
    open ? dynamicClasses.push("open") : dynamicClasses.push("closed");

    return open ? (
        <div className={`sidebar ${dynamicClasses.join(" ")}`}>
            <div>
                <SearchButton
                    handleSidebarChange={() => handleSidebarChange()}
                />
                I'm the sidebar
            </div>
        </div>
    ) : (
        <SearchButton handleSidebarChange={() => handleSidebarChange()} />
    );
}

export default Sidebar;
