import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Navbar, Overview, SingleProduct } from "./components/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/home" element={<Home />} />
        <Route path="/single-product/:id" element={<SingleProduct />} />
      </Routes>
    </div>
  );
}

export default App;
