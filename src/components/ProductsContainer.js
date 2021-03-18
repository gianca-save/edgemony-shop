import ProductCard from './ProductCard.js';
import { useLocation, useHistory } from 'react-router-dom';
import Search from "./Search";
import CategoriesFilter from "./CategoriesFilter";

function ProductsContainer({products, setProductDetail, openCloseModal, categories}){

  const history = useHistory();
  const location = useLocation();


  const query = new URLSearchParams(location.search);

  const selectedCategories = query.get("categories")
    ? query.get("categories").split(",")
    : [];
  function setSelectedCategories(cat) {
    if (cat.length > 0) {
      query.set("categories", cat.join(","));
    } else {
      query.delete("categories");
    }
    history.push({ search: "?" + query.toString() });
  }

  const searchTerm = query.get("q") || "";
  function setSearchTerm(term) {
    if (term) {
      query.set("q", term);
    } else {
      query.delete("q");
    }
    history.push({ search: "?" + query.toString() });
  }


   const termRegexp = new RegExp(searchTerm, "i");
   const filteredProducts = products.filter(
    (product) =>
       product.title.search(termRegexp) !== -1 &&
       (selectedCategories.length === 0 ||
       selectedCategories.includes(product.category))
  );


   return (<div className='ProductsContainer'>
      <div className="ProductsContainer__filter">
        <Search term={searchTerm} onSearch={setSearchTerm} />
        <CategoriesFilter
          categories={categories}
          selectedCategories={selectedCategories}
          onSelectCategory={setSelectedCategories}
        /> </div>
        <div className='ProductsContainer__products'>{(products).map((product) => { return (<ProductCard key= {product.id} product={product} setProductDetail={setProductDetail} openCloseModal={openCloseModal} />)})}</div></div>);
}

export default ProductsContainer;