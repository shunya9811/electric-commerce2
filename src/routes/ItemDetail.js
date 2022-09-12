
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { useState } from 'react';

import { NavLink, useParams } from 'react-router-dom';
import { useUserContext } from '../store/index'
import { PRODUCTS } from '../App'

function ItemDetail(){
    const {  changeInCart, changeFavo, changeNum } = useUserContext();
    
    //store側で指定した変数じゃないとundefinedになる
    const {itemId} = useParams();
    const product = PRODUCTS.find((product) => product.id === Number(itemId))    
    const [ price, setPrice ] = useState(product.num * product.price)
    

    const priceFilter = val => {
        return val.toLocaleString();
    }

    

    return (
        <div className='itemDetailPage'>
            <div className='detailCon'>
                <div className="detailImgBox">
                    <img src={product.image} alt="" />
                </div>
                <div className='priceText'>
                    <h2>{product.name}</h2>
                    <p style={{marginTop: "1.5rem"}}>{priceFilter(product.price)}円</p>
                </div>
                <textarea placeholder='説明' disabled></textarea>
                <div className='priceText'>
                    <a target="_blank" href={product.to} rel="noopener noreferrer">詳しいページ</a>
                    <div>
                        <IconButton 
                            style={{ backgroundColor: product.isInCart ? "black": "", color: product.isInCart ? "white" : ""}} 
                            onClick={() => {changeInCart(product)}}
                        >
                            <AddShoppingCartIcon/>
                        </IconButton>
                        <IconButton 
                            onClick={() => {changeFavo(product)}}
                            style={{ color: product.isFavorited ? "red" : "" }}
                        >
                            <FavoriteIcon/>
                        </IconButton>
                    </div>
                </div>
            </div>
            <div className='operationCon'>
                <h2>{product.name}</h2>
                <div className='priceText'>
                    <p>単価</p>
                    <p>{priceFilter(product.price)}円</p>
                </div>
                <div className='priceText'>
                    <p>数量</p>
                    <input type="number" className='numInput' min="1" 
                        onChange={(event) => { 
                            changeNum(product, event.target.value); 
                            setPrice(product.num * product.price);
                        }}
                        value = {product.num}
                    />
                </div>
                <div className='priceText'>
                    <p>合計</p>
                    <p>{priceFilter(price)}円</p>
                </div>
                <div className='btnCon'>
                    <button className='btn' disabled={product.isInCart} onClick={() => {changeInCart(product)}}>Add Cart</button>
                    <button className='btn' disabled={product.isFavorited} onClick={() => {changeFavo(product)}}>Add Favorite</button>
                    <NavLink to='/cart'><button className='btn'>Go Cart itemPage</button></NavLink>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;