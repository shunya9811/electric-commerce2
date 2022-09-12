import { useState } from 'react';
import CartPageCard from '../component/CartPageCard'

import { useUserContext } from '../store/index'

function Cart(){
    const { cartList, totalPrice } = useUserContext();

    const [amount, setAmount] = useState(totalPrice) 

    return (
        <div className='cartPage'>
            <div>
                <div style={{display: "flex"}}>
                    <div className='cartCon'>
                        <h2>Cart</h2>
                        <div className='userPageCards'>
                            {cartList.map((product) => 
                                <CartPageCard
                                    id = {product.id}
                                    key = {product.id}
                                    setAmount = {setAmount}
                                />
                            )}
                        </div>
                    </div>
                    <div className='purchaseCon'>
                        <div className='priceText'>
                            <p>小計</p>
                            <p>{amount}円</p>
                        </div>
                        <div className='priceText'>
                            <p>合計</p>
                            <p>{amount}円</p>
                        </div>
                        <div className='btnCon'>
                            <button className='btn'>Purchase</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;