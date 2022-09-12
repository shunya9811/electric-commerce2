import { createContext, useContext, useState } from "react"

const UserContext = createContext();

export function useUserContext() {
    return useContext(UserContext);
}

export function UserContextProvider({children}){
    const [cartList, setCartList] = useState([])
    const [favoList, setFavoList] = useState([])
    

    const changeInCart = (product) => {
        if (product.isInCart === true){
            //カートにある状態
            const index = cartList.indexOf(product)
            const arr = cartList.concat()
            arr.splice(index, 1)
            setCartList(arr)
            product.isInCart = !product.isInCart
        } else {
            //カートにない状態
            setCartList([...cartList, product])
            product.isInCart = !product.isInCart
        }
    }

    //ボタンが押されたことで、カートの中にあるなしに関わらず、状態がスイッチされる
    const changeFavo = (product) => {
        if (product.isFavorited === true){
            //ファボされている状態の場合
            const index = favoList.indexOf(product)
            const arr = favoList.concat()
            arr.splice(index, 1)
            setFavoList(arr)
            product.isFavorited = !product.isFavorited
        } else {
            //ファボされていない状態の場合
            setFavoList([...favoList, product])
            product.isFavorited = !product.isFavorited
        }
    }

    const changeNum = (product, num) => {
        product.num = num
    }

    const totalPrice = () => {
        let total = 0;
        cartList.map((product) => 
            total += product.num * product.price
        )
        
        return total.toLocaleString();
    }

    const cartTotalPrice = (cart) => {
        let total = 0;
        cart.map((product) => 
            total += product.num * product.price
        )
        return total.toLocaleString();
    }

    //useStateのset側をもってきた
    const removeProduct = (product, setAmount) => {
        const index = cartList.indexOf(product)
        const arr = cartList.concat()
        arr.splice(index, 1)
        setCartList(arr)
        product.isInCart = !product.isInCart
        setAmount(cartTotalPrice(arr))
    }


    const value = {
        cartList,
        favoList,
        changeInCart,
        changeFavo,
        changeNum,
        totalPrice,
        removeProduct
    }

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}