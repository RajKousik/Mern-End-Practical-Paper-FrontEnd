import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddNewProductComponent from './components/AddNewProductComponent/AddNewProductComponent';
import GetAllProductsComponent from './components/GetAllProductsComponent/GetAllProductsComponent';
import GetCartItemsComponent from './components/GetCartItemsComponent/GetCartItemsComponent';
import DeleteExistingComponent from './components/DeleteExistingComponent/DeleteExistingComponent'

function App() {
  return (
    <Router>
            <div className="container">
              <h1>Shopify - The Shopping App</h1>
              
            <nav className="nav-menu">
                <Link to="/" >Home</Link>
                <Link to="/admin/add" >Add Products</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/admin/delete" >Delete Product</Link>
            </nav>
           <Routes>
                 <Route exact path='/' element={<GetAllProductsComponent/>}></Route>
                 <Route path='/admin/add' element={<AddNewProductComponent/>}></Route>
                 <Route path='/cart' element={<GetCartItemsComponent/>}></Route>
                 <Route path='/admin/delete' element={<DeleteExistingComponent/>}></Route>
          </Routes>
          </div>
       </Router>
  );
}

export default App;