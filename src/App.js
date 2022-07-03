import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import Entregas from './pages/Entregas';
import MeusLivros from './pages/MeusLivros';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/meus-livros" element={<MeusLivros />} />
          <Route path="/entregas" element={<Entregas />} />
          <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
