import './App.css';
import { BrowserRouter as Router , Routes , Route,Link } from 'react-router-dom';
import Shop from './Pages/Shop/Shop';
import Cart from "./Pages/Cart/Cart";
import Nav from './Components/Nav';
// import { ShopContextProvider } from './context/shopContext';
import { ShopContextProvider2 } from './context/ShopContext2';
import ProductPage from './Pages/Product/ProductPage';
function App() {

  return (
    <div className="App">
      <ShopContextProvider2>
    <Router>
      <Nav />
      <Routes>
        {/* <Route path='/' element={<Shop/>} /> */}
        <Route path='/shopCart' element={<Shop/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/product/:id' element={<ProductPage/>} />
      </Routes>
    </Router>
    </ShopContextProvider2>
    </div>
  );
}

export default App;
