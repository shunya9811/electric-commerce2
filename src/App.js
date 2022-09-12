//import { Routes, Route, NavLink, Outlet } from 'react-router-dom';
import './App.css';

//import Item from './routes/Item';
//import ItemDetail from './routes/ItemDetail';
//import Cart from './routes/Cart';
//import Favorite from './routes/Favorite';


import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';

import MacBookAir from './images/MacBookAir.jpg'
import MacBookPro13 from './images/MacBookPro13.jpg'
import MacBookPro14 from './images/MacBookPro14.jpg'
import iPhone13Pro from './images/iPhone13Pro.jpg'
import iPhone13 from './images/iPhone13.jpg'
import iPhoneSE from './images/iPhoneSE.jpg' 
import iPadAir from './images/iPadAir.jpg'
import AirPos3 from './images/AirPods3.jpg'
 
//const homeUrl = process.env.PUBLIC_URL;

function App() {
  return (
    <div className="App">
      <header className='center right'>
          <p className='title'>Electric Commerce</p>
        <div className='headerBtn'>
          <IconButton>
              <ShoppingCartIcon
                fontSize='large'
              />
          </IconButton>
          <IconButton>
              <FavoriteIcon 
                fontSize='large'
              />
          </IconButton>
        </div>
      </header>
      <main>
        {/*
        <Routes>
          <Route path={homeUrl} element={<Item products={PRODUCTS}/>}/>
          <Route path={homeUrl + '/:itemId'} element={<ItemDetail/>}/>
          <Route path={homeUrl + '/cart'} element={<Cart/>}/>
          <Route path={homeUrl + '/favorite'} element={<Favorite/>}/>
        </Routes>
  <Outlet></Outlet>*/}
      </main>
    </div>
  );
}

export const PRODUCTS = [
  {id: 1, name: 'MacBook Air', category: 'Mac', price: 115280, isFavorited: false, isInCart: false, stocked: true, num: 1, image: MacBookAir, to: 'https://www.apple.com/jp/macbook-air/'},
  {id: 2, name: 'MacBook Pro 13', category: 'Mac', price: 148280, isFavorited: false, isInCart: false, stocked: true, num: 1, image: MacBookPro13, to: 'https://www.apple.com/jp/shop/buy-mac/macbook-pro/13%E3%82%A4%E3%83%B3%E3%83%81'},
  {id: 3, name: 'MacBook Pro 14', category: 'Mac', price: 239800, isFavorited: false, isInCart: false, stocked: false, num: 1, image: MacBookPro14, to:'https://www.apple.com/jp/shop/buy-mac/macbook-pro/14%E3%82%A4%E3%83%B3%E3%83%81',},
  {id: 4, name: 'iPhone 13Pro', category: 'iPhone', price: 122800, isFavorited: false, isInCart: false, stocked: true, num: 1, image: iPhone13Pro, to:'https://www.apple.com/jp/shop/buy-iphone/iphone-13-pro'},
  {id: 5, name: 'iPhone 13', category: 'iPhone', price: 86800, isFavorited: false, isInCart: false, stocked: false, num: 1, image: iPhone13, to:'https://www.apple.com/jp/shop/buy-iphone/iphone-13'},
  {id: 6, name: 'iPhone SE', category: 'iPhone', price: 57800, isFavorited: false, isInCart: false, stocked: true, num: 1, image: iPhoneSE, to:'https://www.apple.com/jp/shop/buy-iphone/iphone-se'},
  {id: 7, name: 'iPad Air', category: 'iPad', price: 84800, isFavorited: false, isInCart: false, stocked: true, num: 1, image: iPadAir, to:'https://www.apple.com/jp/shop/buy-ipad/ipad-air'},
  {id: 8, name: 'AirPods(3世代)', category: 'AirPods', price: 27800, isFavorited: false, isInCart: false, stocked: true, num: 1, image: AirPos3, to: 'https://www.apple.com/jp/shop/product/MME73J/A/airpods-%E7%AC%AC3%E4%B8%96%E4%BB%A3'}
  
];

export default App;
