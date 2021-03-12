import ProductCard from './ProductCard.js'

function ProductsContainer({products, setProductModal, openCloseModal}){

   return (<div className='ProductsContainer'>{(products).map((product) => { return (<ProductCard product={product} setProductModal={setProductModal} openCloseModal={openCloseModal} />)})}</div>);
}

export default ProductsContainer;