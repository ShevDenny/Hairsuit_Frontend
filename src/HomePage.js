import React from 'react'
import Search from "./Search";
import HomeDisplay from "./HomeDisplay";

function HomePage({searchTerm, setSearchTerm, handleSearch, setUser}) {
    

    return (
        <>
        <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} handleSearch={handleSearch} />
        <HomeDisplay />
        </>
    )
}

export default HomePage;