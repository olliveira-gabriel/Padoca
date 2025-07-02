import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Menu from "./pages/Menu.js";
import './App.css';


function App() {
  return (
    <Router>
        <Menu/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cardapio" element={<Home/>} />
            <Route path="/unidades" element={<Home/>} />
            <Route path="/carrinho" element={<Home/>} />
        </Routes>
    </Router>
  );
}

export default App;
