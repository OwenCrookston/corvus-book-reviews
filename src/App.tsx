import "./App.css";
import React from "react";
import MainContent from "./components/MainContent.tsx";
import Sidebar from "./components/Sidebar.tsx";
import { useState } from "react";

function App() {
    const [sidebarOpen, setSidebar] = useState(false);
    const dynamicClasses: string[] = [];
    sidebarOpen ? dynamicClasses.push("open") : dynamicClasses.push("closed");

    const handleSidebarChange = () => {
        console.log("change");
        setSidebar(!sidebarOpen);
    };

    return (
        <div className={`App ${dynamicClasses.join(" ")}`}>
            <Sidebar
                open={sidebarOpen}
                handleSidebarChange={handleSidebarChange}
            />
            <MainContent />
        </div>
    );
}

export default App;
