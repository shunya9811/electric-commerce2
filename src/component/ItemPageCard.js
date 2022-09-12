import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { NavLink } from 'react-router-dom';

import { useUserContext } from '../store/index'

function ItemPageCard(props){
    const { changeFavo, changeInCart } = useUserContext();

    const priceFilter = val => {
        return val.toLocaleString();
    }

    return (
        <div className="itemPageCardContainer">
            <NavLink 
                to={`/${props.product.id}`} 
                style={{ textDecoration: 'none', color: "black"}}
            >
                <div className="itemPageCardImgBox">
                    <img src={props.product.image} alt="item" />
                </div>
                <div className="itemName">
                    <h2>{props.product.name}</h2>
                </div>
                <div className="price">
                    <p>{priceFilter(props.product.price)}円~</p>
                </div>
            </NavLink>
            <div className='cardBtnCon'>
                <IconButton 
                    style={{ backgroundColor: props.product.isInCart ? "black": "", color: props.product.isInCart ? "white" : ""}}
                    onClick={() => {changeInCart(props.product)}}
                >
                    <AddShoppingCartIcon/>
                </IconButton>
                <IconButton 
                    onClick={() => {changeFavo(props.product)}}
                    style={{ color: props.product.isFavorited ? "red" : "" }}
                >
                    <FavoriteIcon/>
                </IconButton>
            </div>
        </div>
    )
}

export default ItemPageCard;