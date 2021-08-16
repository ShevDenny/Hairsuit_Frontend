import React, {useEffect} from 'react'
import Search from "./Search";
import HomeDisplay from "./HomeDisplay";

function HomePage({searchTerm, setSearchTerm, handleSearch, setUser}) {

    // useEffect(() => {
    //     const token = localStorage.getItem("token")
    //     fetch(`http://localhost:3000/me`,{
    //       headers: { 
    //         Authorization: `Bearer ${token}`,
    //       },
    //     })
    //     .then(res => res.json())
    //     .then(userData => setUser(userData))
    
    //   },[])
    

    return (
        <>
        <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} handleSearch={handleSearch} />
        <HomeDisplay />
        </>
    )
}

export default HomePage;