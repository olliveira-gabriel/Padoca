import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Menu from "./pages/Menu.js";
import Cardapio from "./pages/Cardapio.js";
import Unidade from "./pages/Unidade.js";
import Carrinho from "./pages/Carrinho.js";
import Rodapé from "./components/Rodapé.js";
import './App.css';


function App() {
  return (
    <Router>
        <Menu/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cardapio" element={<Cardapio/>} />
            <Route path="/unidades" element={<Unidade/>} />
            <Route path="/carrinho" element={<Carrinho/>} />
        </Routes>
        <Rodapé/>
    </Router>

  );
}

export default App;
