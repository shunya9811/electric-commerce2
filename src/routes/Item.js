import SelectBar from '../component/SelectBar'
import Category from '../component/Category'

import { useState } from 'react'


function Item(props){
    const [sortOption, setSortOption] = useState('')
    const [filterText, setFilterText] = useState('')
    const [categoryList, setCategory] = useState([])

    function handleSortOptionChange(sortOption) {
        setSortOption(sortOption)        
    }

    function handleFilterTextChange(filterText){
        setFilterText(filterText)
    }

    props.products.forEach((product) => {
        if (categoryList.indexOf(product.category) === -1){
            setCategory([product.category, ...categoryList])
        }
    })

    return (
        <div className='itemPage'>
            <SelectBar
                onSortOptionChange = {handleSortOptionChange}
                onFilterTextChange = {handleFilterTextChange}
                
            />
            <div className='itemDisplay'>
                {categoryList.map((category) => 
                    <Category
                        sortOption = {sortOption}
                        filterText = {filterText}
                        category = {category}
                        products = {props.products}
                        key = {category}
                    />
                )}
                    
            </div>
        </div>
    )
}

export default Item;