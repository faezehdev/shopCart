import './App.css';
import { BrowserRouter as Router , Routes , Route,Link } from 'react-router-dom';
import Shop from './Pages/Shop/Shop';
import Cart from "./Pages/Cart/Cart";
import Nav from './Components/Nav';
import { ShopContextProvider } from './context/shopContext';
function App() {

  return (
    <div className="App">
      <ShopContextProvider>
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </Router>
    </ShopContextProvider>
    </div>
  );
}

export default App;
