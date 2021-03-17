import "./App.css";

import Home from './Pages/Home.js';
import Product from './Pages/Product.js'
import Page404 from './Pages/Page404.js'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from "./components/Header.js";
import './components/Header.css';

import Hero from "./components/Hero.js";
import "./components/Hero.css";

import CartModal from './components/CartModal.js';

import {useState} from "react";

const data = {
  title: "Edgemony Shop",
  description: "A fake e-commerce with a lot of potential",
  logo:
    "https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png",
  cover:
    "https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
};

function App() {

  const [ cart, setCart ] = useState([]);

  const [ totalPrice, setTotalPrice ] = useState(0);

  const [ isCartModalOpen, setIsCartModalOpen ] = useState(false);


  return <Router>
    
      <div className="App">
    
      <Header logo={data.logo} total={totalPrice} cart={cart} setIsCartModalOpen={setIsCartModalOpen} />
      <Hero title={data.title} description={data.description} cover={data.cover}/>

      <CartModal isCartModalOpen={isCartModalOpen} setIsCartModalOpen={setIsCartModalOpen} cart={cart} setCart={setCart} total={totalPrice} setTotal={setTotalPrice} />
    
    <Switch>
      <Route exact path='/'>
        <Home cart={cart} setCart={setCart} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>
       
      </Route>

      <Route path='/product/:productId'>
        <Product cart={cart} setCart={setCart} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
      </Route>

      <Route path='*'>
        <Page404 />
      </Route>

    </Switch>
    
    </div> 
    </Router>
}

export default App;
