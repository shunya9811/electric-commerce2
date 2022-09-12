import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Error from "./Pages/Error";


import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';

const homeUrl = process.env.PUBLIC_URL;

function App() {
　　return (
      <div className='App'>
        <header className='center right'>
            <h1 className='title'>Electric Commerce</h1>
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
          <Router>
            <Routes>
              <Route path={ homeUrl } element={<Home />} />
              <Route path={ homeUrl + "/about" } element={<About />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </Router>
        </main>
      </div>
    );
}

export default App;