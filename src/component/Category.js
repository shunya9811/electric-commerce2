import React from "react";
import ItemPageCard from "./ItemPageCard";


class Category extends React.Component{
    constructor(props){
        super(props)
        this.sort = this.sort.bind(this)
    }

    sort(list, sortOption){
        if (sortOption === "1"){
            list.sort(function(a, b) {
                return a.price - b.price
            })
        } else if (sortOption === "2") {
            list.sort(function(a, b) {
                return b.price - a.price
            })
        }
    }


    render(){
        const productList = [];
        const renderList  = [];

        this.props.products.forEach((product) => {
            if (product.name.indexOf(this.props.filterText) === -1){
                return 
            }

            if (product.category === this.props.category){
                productList.push(product)
            }
        })

        this.sort(productList, this.props.sortOption)
        
        productList.forEach((product) => {
            renderList.push(
                <ItemPageCard
                    product = {product}
                    key = {product.name}
                />
            )
        })

        return (
            <div className='itemCon'>
                <h2>{this.props.category}</h2>
                <div className='itemPageCards'>
                    {renderList}
                </div>
            </div>
        )
    }
}
export default Category;