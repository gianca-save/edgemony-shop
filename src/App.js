import "./App.css";
import Header from "./components/Header.js";
import './components/Header.css';

import Hero from "./components/Hero.js";
import "./components/Hero.css";

import ProductsContainer from "./components/ProductsContainer.js";
import "./components/ProductCard.css";
import "./components/ProductsContainer.css";
import "./components/ProductModal.css";
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

  useEffect(() => 
  {
    async function fetchData() {
      try {
        console.log('Invio richiesta dati in corso...');
        setLoading(true);
        const response = await fetch('https://fakestoreapi.com/product');
        console.log('Dati ricevuti');

        const fakeProducts = await response.json();

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

  }, []);

  return <div className="App">
    <Header logo={data.logo} />
    <Hero title={data.title} description={data.description} cover={data.cover}/>
    {!isLoading ? <ProductsContainer products={products} /> : <h1>Loading...</h1>  }
    {isError && <h2>Errore nell'acquisizione dei dati :/</h2> }
  </div>;
}

export default App;
