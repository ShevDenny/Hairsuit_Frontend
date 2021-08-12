
function Search({searchTerm, setSearchTerm, handleSearch}){
 

    function handleChange(e){
        setSearchTerm(e.target.value)
    }




    return (
        <div className="search">
            <form className="search-form" onSubmit={handleSearch}>
                <input required type="text" className="search-input" placeholder="Search..." value={searchTerm} onChange={handleChange}/>
                <input type="submit" value="Search"/>
            </form>
        </div>
    )
}

export default Search;