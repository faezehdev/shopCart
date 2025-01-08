import './App.css';
import { BrowserRouter as Router , Routes , Route,Link } from 'react-router-dom';
import Shop from './Pages/Shop/Shop';
import Cart from "./Pages/Cart/Cart";
import Nav from './Components/Nav';
// import { ShopContextProvider } from './context/shopContext';
import { ShopContextProvider2 } from './context/ShopContext2';
function App() {

  return (
    <div className="App">
      <ShopContextProvider2>
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </Router>
    </ShopContextProvider2>
    </div>
  );
}

export default App;
