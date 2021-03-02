import ProductCard from './ProductCard.js'

function ProductsContainer(props){   
   return (<div className='ProductsContainer'>{(props.products).map((product) => { return (<ProductCard image={product.image} description={product.description} title={product.title} price={product.price} />)})}</div>);
}

export default ProductsContainer;