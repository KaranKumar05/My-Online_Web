import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

import './navbar.css'

import SearchBar from '../searchbar/searchbar'

// import Logo from '../../images/logo.svg'

const Navbar = () => {
  const {cartTotalQuantity} = useSelector(state => state.cart)
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>Alpha's 
          Store</h1>
      </Link>

      <SearchBar />

      <div className="icons">
        <Link to="/cart">
          <div className="cart">
            <span className="cart-icon">
              <Icon.Cart2 />
            </span>
            <span className="cart-count">
              <span>{cartTotalQuantity}</span>
            </span>
          </div>
        </Link>

        <Link to="/">
          <div className="house-icon">
            <Icon.House />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
