import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { PRODUCTS } from '../App'
import { useUserContext } from '../store/index'

function CartPageCard(props){
    const product = PRODUCTS.find((product) => product.id === Number(props.id))
    const [ num, setNum ] = useState(product.num);
    const { changeNum, totalPrice, removeProduct } = useUserContext();

    const priceFilter = val => {
        return val.toLocaleString();
    }

    return (
        <div className='userPageCardsContainer'>
            <NavLink 
                to={`/${product.id}`} 
                style={{ textDecoration: 'none', color: "black"}}
            >
                <div className="imgBox">
                    <img src={product.image} alt="" />
                </div>
                <h3>{product.name}</h3>
            </NavLink>
            <div style={{textAlign: "right"}}>
                <p>{priceFilter(product.price)}円</p>
                <div className='priceText'>
                    <p>数量:</p>
                    <input type="number" className='numInput' min="1" 
                    onChange={(event) => {
                        changeNum(product, event.target.value);
                        setNum(event.target.value);
                        props.setAmount(totalPrice)
                    }} 
                    value={num}></input>
                </div>
                <p onClick={() => {
                    removeProduct(product, props.setAmount);
                    changeNum(product, 1);
                }}>カートから削除する</p>
            </div>
        </div>
    )
}

export default CartPageCard;