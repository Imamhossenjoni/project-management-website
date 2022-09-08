import { ToastContainer } from 'react-toastify';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home'
import Banner from './Pages/Home/Banner';
import ProductDetails from './Pages/Catagory/Men/ProductDetails'
import Catagory from './Pages/Catagory/Catagory';
import Login from './Pages/Shared/Login';
import Register from './Pages/Shared/Register';
import MenAllProducts from './Pages/Catagory/Men/MenAllProducts';
import { Route, Routes } from 'react-router-dom';
import Shop from './Pages/Shop/Shop';
import DashBoard from './Pages/DashBoard/DashBoard';
import Contact from './Pages/Contact/Contact'
import MyOrder from './Pages/DashBoard/MyOrder';
import MyReview from './Pages/DashBoard/MyReview';
import Footer from './Pages/Shared/Footer';
import AddNewProduct from './Pages/DashBoard/AddNewProduct';
import ManageItems from './Pages/DashBoard/ManageItems';
import AllUsers from './Pages/DashBoard/AllUsers';
import Payment from './Pages/DashBoard/Payment';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/catagory' element={<Catagory></Catagory>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='dashboard' element={<DashBoard></DashBoard>}>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='addItem' element={<AddNewProduct></AddNewProduct>}></Route>
          <Route path='users' element={<AllUsers></AllUsers>}></Route>
          <Route path='manage' element={<ManageItems></ManageItems>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
           
        </Route>
        <Route path='/men' element={<MenAllProducts></MenAllProducts>}></Route>
        <Route path='/men/:id' element={<ProductDetails></ProductDetails>}></Route>
      </Routes>
      <ToastContainer/>
      <Footer></Footer>
    </div>
  );
}

export default App;
