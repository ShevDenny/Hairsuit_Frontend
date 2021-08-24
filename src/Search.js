
function Search({user, searchTerm, setSearchTerm, handleSearch}){
 

    function handleChange(e){
        setSearchTerm(e.target.value);
       
    }


    return (
        <div>
            <h2 className="name">Welcome {user.name}</h2>

        <div className="search">
            <form id="search-form" className="ui input" onSubmit={handleSearch} >
                <input id="search" className="ui input" required type="text" placeholder="Search..." value={searchTerm} onChange={handleChange}/>
                <input className="ui input" type="submit" value="Search"/>
            </form>
        </div>
        </div>
    )
}

export default Search;