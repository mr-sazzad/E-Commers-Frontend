import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Navbar } from "./components/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
