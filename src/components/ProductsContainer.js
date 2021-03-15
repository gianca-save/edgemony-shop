import ProductCard from './ProductCard.js'

function ProductsContainer({products, setProductDetail, openCloseModal}){

   return (<div className='ProductsContainer'>{(products).map((product) => { return (<ProductCard key= {product.id} product={product} setProductDetail={setProductDetail} openCloseModal={openCloseModal} />)})}</div>);
}

export default ProductsContainer;