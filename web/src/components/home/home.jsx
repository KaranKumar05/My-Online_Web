import { useGetAllProductsQuery } from "../../features/productsApi";
import { useDispatch } from "react-redux";

import {useNavigate} from 'react-router-dom'

import "./home.css";
import { addToCart } from "../../features/cartSlice";

const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const addToCartHandler = (product) => {
    dispatch(addToCart(product));
    navigate('/cart')
  };

  return (
    <div className="home-container">
      {isLoading ? (
        <p>Loading....</p>
      ) : error ? (
        <p>An Error occurred....</p>
      ) : (
        <>
          <h1>New Arrivals</h1>
          <div className="products">
            {data?.map((product) => (
              <div key={product.id} className="product">
                <h2>{product.name}</h2>
                <img src={product.image} alt={product.name} />
                <div className="details">
                  <span>{product.desc}</span>
                  <span>${product.price}</span>
                </div>
                <button onClick={() => addToCartHandler(product)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
