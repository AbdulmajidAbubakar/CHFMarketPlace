import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import App from './pages/app';
import Login from './pages/login';
import Signup from './pages/signup'
import {Provider} from 'react-redux'
import { store } from './redux/store';
import Upload from './pages/upladprod';
import ViewProducts from './pages/viewprod';
import SingleProd from './pages/singleprod'
import { SnackbarProvider } from 'notistack';
import Category from './pages/category';
import Profile from './pages/profile';
import Nav from './components/nav';
import About from './pages/about';
import Cart from './pages/cart';
import Checkout from './pages/checkout';
import DonateProd from './pages/donateprod';
import Money from './pages/money';
import Footer from './components/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Provider store={store}>
      <SnackbarProvider maxSnack={3}>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<App/>}/> 
      <Route path="/signup" element={<Signup/>}/> 
      <Route path="/login" element={<Login/>}/> 
      <Route path="/upload" element={<Upload/>}/> 
      <Route path="/products/:term" element={<ViewProducts/>}/> 
      <Route path="/category/:term" element={<Category/>}/> 
      <Route path="/item/:id" element={<SingleProd />} />
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/doanteitems' element={<DonateProd/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/money' element={<Money/>}/>
      
        </Routes>
        <Footer/>
      </BrowserRouter>
      </SnackbarProvider>

    </Provider>
    
);


