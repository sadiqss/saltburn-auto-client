import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './pages/Shared/Navbar';
import Purchase from './pages/Purchase/Purchase';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';
import RequireAuth from './pages/Login/RequireAuth';
import Products from './pages/Product/Products';
import Dashboard from './pages/Dashboard/Dashboard';
import MyPurchase from './pages/Dashboard/MyPurchase';
import MyReview from './pages/Dashboard/MyReview';
import MyReward from './pages/Dashboard/MyReward';
import Users from './pages/Dashboard/Users';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>}>
          <Route index element={<MyPurchase></MyPurchase>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='reward' element={<MyReward />}></Route>
          <Route path='users' element={<Users></Users>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>

    </div>
  );
}

export default App;
