import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Navbar, Overview } from "./components/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
