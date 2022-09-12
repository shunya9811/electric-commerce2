import FavoPageCard from '../component/FavoPageCard'

import { useUserContext } from '../store/index'

function Favorite(){
    const { favoList } = useUserContext();

    return (
        <div className='favoritePage'>
            <div className='favoriteCon'>
                <h2>Favorite Items</h2>
                <div className='userPageCards'>
                    {favoList.map((product) => 
                        <FavoPageCard
                            product = {product}
                            key = {product.name}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Favorite;