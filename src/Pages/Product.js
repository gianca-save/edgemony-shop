import {useParams} from "react-router-dom";
import {useState, useEffect} from 'react'
import ProductDetail from '../components/ProductDetail';
import Loading from '../components/Loading.js';
import Error from '../components/Error.js'

function Product({cart, setCart, totalPrice, setTotalPrice}) {

    const { productId } = useParams();

  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [ retry, setRetry ] = useState(false);
  const [ productDetail, setProductDetail ] = useState(undefined);


    useEffect(() => 
  {
    async function fetchProduct() {
      try {
        setRetry(false);
        console.log('Invio richiesta dati relativi al prodotto selezionato in corso...');
        setLoading(true);
        const response = await fetch('https://fakestoreapi.com/products');

        const fakeProducts = await response.json();

        console.log('Dati ricevuti');
        console.log('Dati convertiti in JSON');

        const product = fakeProducts.find(product => product.id === productId);
        console.log(product)

        setProductDetail(product);
        console.log('Dati del prodotto memorizzati in productDetail: ', productDetail)
        setLoading(false);
      }

      catch (err) {
        console.log('Errore durante l\'acquisizione dei dati relativi ai prodotti: ', err.message);
        setLoading(false);
        setError(true);
      }
    }

    fetchProduct();

  }, [ retry ]);

    return <div>
        {!isLoading ? <ProductDetail product={productDetail} cart={cart} setCart={setCart} total={totalPrice} setTotal={setTotalPrice} /> : <Loading />  }
        {isError && <Error retry={retry} setRetry={() => setRetry(true)} /> }
    </div>
}

export default Product;