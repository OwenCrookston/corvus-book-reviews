import React from "react";

type SidebarProps = {
    open: boolean;
    handleSidebarChange: () => void;
};

function Sidebar({ open, handleSidebarChange }: SidebarProps) {
    const dynamicClasses: string[] = [];
    open ? dynamicClasses.push("open") : dynamicClasses.push("closed");

    return (
        <div className={`sidebar ${dynamicClasses.join(" ")}`}>
            <button type="button" onClick={() => handleSidebarChange()}>
                I'm the Button
            </button>
            <div>I'm the sidebar</div>
        </div>
    );
}

export default Sidebar;
