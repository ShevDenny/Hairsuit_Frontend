
function Search({searchTerm, setSearchTerm, handleSearch}){
 

    function handleChange(e){
        setSearchTerm(e.target.value);
       
    }


    return (
        <div className="search">
            <form className="ui input" onSubmit={handleSearch} >
                <input className="ui input" required type="text" placeholder="Search..." value={searchTerm} onChange={handleChange}/>
                <input className="ui input" type="submit" value="Search"/>
            </form>
        </div>
    )
}

export default Search;