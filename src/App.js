import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Checkout from './Pages/Checkout/Checkout';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/Service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/Checkout' element={<Checkout></Checkout>} ></Route>
        <Route path='/Register' element={<Register></Register>} ></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
