import { Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header";
import { HomeMain } from "./Components/Home/HomeMain";
import { ProductDetail } from "./Components/Home/ProductDetail";
import { CartMain } from "./Components/Cart/CartMain";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomeMain/>} />
        <Route path='/product/:id' element={<ProductDetail/>} />
        <Route path='/cart' element={<CartMain/>} />
      </Routes>
    </>
  );
}

export default App;
