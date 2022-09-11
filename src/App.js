import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Error from "./Pages/Error";
const homeUrl = process.env.PUBLIC_URL;

function App() {
　　return (
　　　　<Router>
　　　　　　<Routes>
　　　　　　　　<Route path={ homeUrl } element={<Home />} />
　　　　　　　　<Route path={ homeUrl + "/about" } element={<About />} />
　　　　　　　　<Route path="*" element={<Error />} />
　　　　　　</Routes>
　　　　</Router>
　　);
}

export default App;