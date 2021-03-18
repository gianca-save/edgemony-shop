import {useParams} from "react-router-dom";
import {useState, useEffect} from 'react'
import ProductDetail from '../components/ProductDetail';
import Loading from '../components/Loading.js';
import Error from '../components/Error.js'

function Product({cart, setCart, totalPrice, setTotalPrice}) {

  let { productId } = useParams();

  const [isLoadingProduct, setLoadingProduct] = useState(true);
  const [isError, setError] = useState(false);
  const [ retry, setRetry ] = useState(false);
  const [ productDetail, setProductDetail ] = useState();

    useEffect(() => 
  {
    async function fetchProduct() {
      try {
        setLoadingProduct(true);
        console.log('Invio richiesta dati relativi al prodotto selezionato in corso...');
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);

        const product = await response.json();

        console.log('Dati ricevuti');
        console.log('Dati convertiti in JSON');

        setProductDetail(product);
        console.log('Dati del prodotto memorizzati in productDetail: ', product)
        setLoadingProduct(false);
      }

      catch (err) {
        console.log('Errore durante l\'acquisizione dei dati relativi ai prodotti: ', err.message);
        setLoadingProduct(false);
        setError(true);
      }
    }

    fetchProduct();

  }, [productId, retry ]);

    return <div>
        {isLoadingProduct ? <Loading /> : <ProductDetail product={productDetail} cart={cart} setCart={setCart} total={totalPrice} setTotal={setTotalPrice} />  }
        {isError && <Error retry={retry} setRetry={() => setRetry(true)} /> }
    </div>
}

export default Product;