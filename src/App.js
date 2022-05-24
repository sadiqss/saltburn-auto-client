import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './pages/Shared/Navbar';
import Purchase from './pages/Purchase/Purchase';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';
import RequireAuth from './pages/Login/RequireAuth';
import Products from './pages/Product/Products';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path="/purchase" element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>} />
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>

    </div>
  );
}

export default App;
