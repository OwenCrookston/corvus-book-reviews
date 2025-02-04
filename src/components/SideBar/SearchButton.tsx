import React from "react";

type SearchButtonProps = {
    handleSidebarChange: () => void;
};

function SearchButton({ handleSidebarChange }: SearchButtonProps) {
    return (
        <button
            type="button"
            className="search-bar-button"
            onClick={() => handleSidebarChange()}
        >
            <img src={"./icons/search-svgrepo-com.svg"} alt="search button" />
        </button>
    );
}

export default SearchButton;
