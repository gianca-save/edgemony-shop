import ProductCard from './ProductCard.js'

function ProductsContainer(props){   
   return (<div className='ProductsContainer'>{(props.products).map((product) => { return (<ProductCard key={product.id} product={product} openProductModal={() => props.openProductModal(product)} />)})}</div>);
}

export default ProductsContainer;