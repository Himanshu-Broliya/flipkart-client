import { Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header";
import { HomeMain } from "./Components/Home/HomeMain";
import { ProductDetail } from "./Components/Home/ProductDetail";
import { CartMain } from "./Components/Cart/CartMain";
import { Success } from "./Components/Success";
import { Cancel } from "./Components/Cancel";



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomeMain/>} />
        <Route path='/product/:id' element={<ProductDetail/>} />
        <Route path='/cart' element={<CartMain/>} />
        <Route path='/success' element={<Success/>} />
        <Route path='/cancel' element={<Cancel/>} />


      </Routes>
    </>
  );
}

export default App;
