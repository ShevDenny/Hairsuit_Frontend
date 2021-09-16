
function Search({searchTerm, setSearchTerm, handleSearch}){
 

    function handleChange(e){
        setSearchTerm(e.target.value);
       
    }


    return (
        <div className="search">
            <form id="search-form" className="ui input" onSubmit={handleSearch} autocomplete="off">
                <input id="search" className="ui input" required type="text" placeholder="Search..." value={searchTerm} onChange={handleChange}/>
                
                <input className="ui input" type="submit" value="Search"/>
            </form>
        </div>
    )
}

export default Search;