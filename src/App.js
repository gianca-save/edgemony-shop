import "./App.css";
import Header from "./components/Header.js";
import './components/Header.css';

import Hero from "./components/Hero.js";
import "./components/Hero.css";

import ProductsContainer from "./components/ProductsContainer.js";
import "./components/ProductCard.css";
import "./components/ProductsContainer.css";
import "./components/ProductModal.css";

import ProductModal from "./components/ProductModal.js"

import Loading from "./components/Loading.js";
import "./components/Loading.css";

import Error from "./components/Error.js";
import "./components/Error.css"

import { useState, useEffect } from "react";

const data = {
  title: "Edgemony Shop",
  description: "A fake e-commerce with a lot of potential",
  logo:
    "https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png",
  cover:
    "https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
};

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [ retry, setRetry ] = useState(false);
  const [ cart, setCart ] = useState([]);

  const cartTotal = cart.reduce((acc, cartItem) => {
    const product = products.find((product) => product.id===cartItem.id);
    return acc + product.price;
  }, 0);

  const cartSize= cart.length;

  function addToCart(productId) {
    setCart([...cart, {id:product, quantity:1}]);

    function removeFromCart(productId) {
      setCart(cart.filter((product) => product-id!==productId));
    }

    function isProductInCart(productId) {
      return (productId!=null && cart.find((product) => product.id===productId) != null)
    }
  }

  const cartProducts = cart.map((cartItem) => {
    const product = products.find((product) => product.id === cartItem.id);
    return {
      id: product.id,
      quantity: cartItem.quantity,
      title: product.title,
      image: product.image,
      price: product.price
    }
  });

   const [productInModal, setProductInModal] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openProductModal(product) {
    console.log(product);
    setProductInModal(product);
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
    setTimeout(() => {
      setProductInModal(null);
    }, 500);
  }

  useEffect(() => 
  {
    async function fetchData() {
      try {
        setRetry(false);
        console.log('Invio richiesta dati in corso...');
        setLoading(true);
        const response = await fetch('https://fakestoreapi.com/products');

        const fakeProducts = await response.json();

        console.log('Dati ricevuti');
        console.log('Dati convertiti in JSON');
        setProducts(fakeProducts);
        console.log('Dati memorizzati in fakeProducts: ',fakeProducts)
        setLoading(false);
      }

      catch (err) {
        console.log('Errore durante l\'acquisizione dei dati relativi ai prodotti: ', err.message);
        setLoading(false);
        setError(true);
      }
    }

    fetchData();

  }, [ retry ]);

  return <div className="App">
    <Header 
    logo={data.logo} products={products} cartTotal={cartTotal} cartSize={cartSize}
    />

    <Hero
     title={data.title} description={data.description} cover={data.cover}

     />

    {!isLoading ? 
      <ProductsContainer products={products} openProductModal={openProductModal} />
    : 
    <Loading />  }
    {isError && <Error retry={retry} setRetry={() => setRetry(true)} /> }

    <ProductModal
        isOpen={modalIsOpen}
        content={productInModal}
        closeModal={closeModal}
        cart={cart}
        setCart={setCart}
      />
  </div>;
}

export default App;
