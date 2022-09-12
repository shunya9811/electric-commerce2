import { NavLink } from 'react-router-dom';
import { useUserContext } from '../store/index'

function FavoPageCard(props){
    const { changeFavo } = useUserContext();

    const priceFilter = val => {
        return val.toLocaleString();
    }

    return (
        <div className='userPageCardsContainer'>
            <NavLink
                to={`/${props.product.id}`} 
                style={{ textDecoration: 'none', color: "black"}}
            >
                <div className="imgBox">
                    <img src={props.product.image} alt="" />
                </div>
                <h3>{props.product.name}</h3>
            </NavLink>
            <div style={{textAlign: "right"}}>
                <p>{priceFilter(props.product.price)}円</p>
                <p onClick={() => {changeFavo(props.product)}}>お気に入りから削除する</p>
            </div>  
        </div>
    )
}

export default FavoPageCard;