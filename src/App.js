import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./Component/Cart";
import Header from "./Component/Header";
import Home from "./Component/Home";

function App() {
  return (
    <BrowserRouter className="app">
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/cart" exact element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
