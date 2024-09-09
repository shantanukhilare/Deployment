import React from 'react';
import { Route, Routes} from 'react-router-dom'
import './App.css';

import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';
import Logout from './screens/Logout';
import Address from './screens/Address';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddProduct from './screens/AddProduct';
import AddCategory from './screens/AddCategory.jsx';
import CategoryList from './components/Categories.jsx';
import { Product } from './screens/Product.jsx';
import Categories from './screens/Category.jsx';
import EditCategory from './screens/EditCategory.jsx';

function App() {
  return (
    <div className="App">      
      <Routes>
        <Route path='' element={ <Login/>} />
        <Route path='login' element={ <Login/>} />
        <Route path='home' element={ <Home/>} />
        <Route path='register' element={ <Register/>} />
        <Route path='logout' element={ <Logout/>} />
        <Route path='address' element={ <Address/>} />
        <Route path='addProduct' element={ <AddProduct/>} />
        <Route path="/categories" element={<CategoryList />} />
        <Route path="/product" element={<Product />} />        
        <Route path="/category" element={<Categories />} />   
        <Route path="/addCategory" element={<AddCategory />} />
        <Route path="/editCategory/:id" element={<EditCategory />} />            
      </Routes>
      <ToastContainer/>

    </div>
  );
}
// 
export default App;