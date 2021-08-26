import React from 'react'
import Search from "./Search";
import HomeDisplay from "./HomeDisplay";

function HomePage({user, searchTerm, setSearchTerm, handleSearch}) {


    

    return (
        <>
        <Search user={user} setSearchTerm={setSearchTerm} searchTerm={searchTerm} handleSearch={handleSearch} />
        <HomeDisplay />
        </>
    )
}

export default HomePage;