import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

import "./cart.css";
import {
  removeFromCart,
  decreaseCartQuantity,
  addToCart,
  clearCart,
  getTotals,
} from "../../features/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotals());
    },[cart, dispatch])

  const removeFromCardHandler = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const decreaseCartQuantityHandler = (cartItem) => {
    dispatch(decreaseCartQuantity(cartItem));
  };

  const increaseCartQuantityHandler = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your Cart Is Empty</p>
          <div className="start-shopping">
            <Link to="/">
              <span>
                Start Shopping
                <Icon.ArrowRight />
              </span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {cart.cartItems &&
              cart.cartItems.map((cartItem) => (
                <div className="cart-item" key={cartItem.id}>
                  <div className="cart-product">
                    <img src={cartItem.image} alt={cartItem.name} />
                    <div>
                      <h3>{cartItem.name}</h3>
                      <p>{cartItem.desc}</p>
                      <button onClick={() => removeFromCardHandler(cartItem)}>
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="cart-product-price">${cartItem.price}</div>
                  <div className="cart-product-quantity">
                    <button
                      onClick={() => decreaseCartQuantityHandler(cartItem)}
                    >
                      <Icon.DashLg />
                    </button>
                    <div className="count">{cartItem.cartQuantity}</div>
                    <button
                      onClick={() => increaseCartQuantityHandler(cartItem)}
                    >
                      <Icon.PlusLg />
                    </button>
                  </div>
                  <div className="cart-product-total-price">
                    ${cartItem.price * cartItem.cartQuantity}
                  </div>
                </div>
              ))}
          </div>
          <div className="cart-summary">
            <button
              className="clear-btn"
              onClick={() => clearCartHandler()}
            >
              Clear Cart
            </button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">${cart.cartTotalAmount}</span>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              <button>Check out</button>
              <div className="continue-shopping">
                <Link to="/">
                  <span>
                    Continue Shopping
                    <Icon.ArrowRight />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
