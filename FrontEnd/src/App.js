import Home from "./pages/Home.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Menu from "./pages/Menu.js";
import Cardapio from "./pages/Cardapio.js";
import Unidades from "./pages/Unidades.js";
import Carrinho from "./pages/Carrinho.js";
import Rodapé from "./components/Rodapé.js";
import { CartProvider } from './context/CartContext';
import './App.css';
import SobreNos from "./pages/SobreNos.js";
import Parceiros from "./pages/Parceiros.js";


function App() {
  return (
    <CartProvider>
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cardapio" element={<Cardapio />} />
          <Route path="/unidades" element={<Unidades />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/sobreNos" element={<SobreNos/>} />
          <Route path="/parceiros" element={<Parceiros/>} />
        </Routes>
        <Rodapé />
      </Router>
    </CartProvider>
  );
}

export default App;
