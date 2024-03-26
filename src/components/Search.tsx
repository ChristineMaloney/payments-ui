const Search = () : JSX.Element => {

    const orderIdSearch = () => {
        console.log("button click")
    }
    return(
        <div className="search">
            <label htmlFor="orderId">Order Id:  </label>
            <input id="orderId" type="text" />
            <button onClick={orderIdSearch} className="searchButton">Search</button>
        </div>
    )
}

export default Search;