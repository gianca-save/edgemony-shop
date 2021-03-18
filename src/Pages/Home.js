/* import {Route, Switch} from 'react-router-dom'; */

import { useState, useEffect } from "react";

import ProductsContainer from "../components/ProductsContainer.js";
import "../components/ProductCard.css";
import "../components/ProductsContainer.css";
import "../components/ProductModal.css";

import Loading from "../components/Loading.js";
import "../components/Loading.css";

import Error from "../components/Error.js";
import "../components/Error.css";

import ProductDetail from "../components/ProductDetail.js";

import Modal from "../components/Modal.js"

import "../components/ProductModal.css";

let cache;

function Home({cart, setCart, totalPrice, setTotalPrice}) {

  const [products, setProducts] = useState(cache ? cache.products : []);
  const [categories, setCategories] = useState(cache ? cache.categories : []);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [ retry, setRetry ] = useState(false);
  const [ productDetail, setProductDetail ] = useState(undefined);
  const [ isProductModalOpen, setIsProductModalOpen ] = useState(false);


    useEffect(() => 
  {
    async function fetchData() {
      try {
        if (cache !== undefined) {
          return;
        }

        setRetry(false);
        console.log('Invio richiesta dati in corso...');
        setLoading(true);
        const responseProducts = await fetch('https://fakestoreapi.com/products');
        const responseCategories = await fetch('https://fakestoreapi.com/products/categories')

        const fakeProducts = await responseProducts.json();
        const fakeCategories = await responseCategories.json();

        console.log('Dati ricevuti');
        console.log('Dati convertiti in JSON');
        setProducts(fakeProducts);
        setCategories(fakeCategories);
        console.log('Dati memorizzati in fakeProducts: ',fakeProducts);
        console.log('Categorie: ', fakeCategories);

        cache = { products, categories };

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

    return <div>
         {!isLoading ? <ProductsContainer products={products} setProductDetail={setProductDetail} openCloseModal={setIsProductModalOpen} categories={categories} /> : <Loading />  }
        {isError && <Error retry={retry} setRetry={() => setRetry(true)} /> }
        
        <Modal isOpen={isProductModalOpen} onClose={() => setIsProductModalOpen(false)}>
          <ProductDetail product={productDetail} setProduct={setProductDetail} isModalOpen={isProductModalOpen} openCloseModal={setIsProductModalOpen} cart={cart} setCart={setCart} total={totalPrice} setTotal={setTotalPrice} />
        </Modal>

        </div>

}

export default Home;