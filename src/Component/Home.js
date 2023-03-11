import { CartState } from "../context/Context";
import SingleProduct from "./SingleProduct";
import "./Home.css";
import Filter from "./Filter";
function Home() {
  const {
    state: { product },
  } = CartState();

  return (
    <div className="home">
      <Filter />
      <div className="productContianer">
        {product.map((prod) => {
          return <SingleProduct prod={prod} key={prod.name} />;
        })}
      </div>
    </div>
  );
}

export default Home;
