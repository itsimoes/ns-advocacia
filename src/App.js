import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Sobre from "./components/Sobre/Sobre";
import Navbar from "./components/Navbar/Navbar";
import Servicos from "./components/Servicos/Servicos";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />          
          <Route path="/servicos" element={<Servicos />} />          
        </Routes>
      </Router>
    </>
  );
}
export default App;
