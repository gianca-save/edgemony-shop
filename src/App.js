import "./App.css";
import Header from "./components/Header.js";
import './components/Header.css';

import Hero from "./components/Hero.js";
import "./components/Hero.css";

import ProductsContainer from "./components/ProductsContainer.js";
import "./components/ProductCard.css";
import "./components/ProductsContainer.css";
import "./components/ProductModal.css";


const fakeProducts = require("./mocks/data/products.json");
console.log(fakeProducts);

const data = {
  title: "Edgemony Shop",
  description: "A fake e-commerce with a lot of potential",
  logo:
    "https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png",
  cover:
    "https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  products: fakeProducts,
};

function App() {
  return <div className="App">
    <Header logo={data.logo} />
    <Hero title={data.title} description={data.description} cover={data.cover}/>
    <ProductsContainer products={fakeProducts} />
  </div>;
}

export default App;
