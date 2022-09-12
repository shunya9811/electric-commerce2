function selectBar(props){
    function handleSortOptionChange(e) {
        props.onSortOptionChange(e.target.value)
    }

    function handleFilterTextChange(e) {
        props.onFilterTextChange(e.target.value);
    }

    return (
        <div className='selectBar'>
            <div className='sortCon'>
                <h3>Sort</h3>
                <select className='sortInput' onChange={handleSortOptionChange}>
                    <option defaultValue="0">Sort by</option>
                    <option value="1">Price: Low to High</option>
                    <option value="2">Price: High to Low</option>
                </select>
            </div>
            <div className='filteringCon'>
                <h3>Filtering</h3>
                <input type="text" placeholder='Search ...' className='searchInput' onChange={handleFilterTextChange}></input>
            </div>
        </div>
    )
}

export default selectBar;
