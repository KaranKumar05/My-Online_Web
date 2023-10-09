import React, { useState } from "react";
import { useSelector } from "react-redux";

import "./checkout.css";

const CheckoutForm = () => {
  const [choice, setChoice] = useState("no"); // Default is 'no'
  const cart = useSelector((state) => state.cart);

  const handleRadioChange = (event) => {
    setChoice(event.target.value);
  };
  return (
    <div className="checkout-container">
      {/* <h1>CheckOut Form</h1> */}
      <form>
        <fieldset>
          <legend>Basic Information</legend>
          <span>
            <input required type="text" placeholder="First Name" />
            <input required type="text" placeholder="Last Name" />
          </span>
          <span>
            <input required type="email" placeholder="Email" />
            <input required type="number" placeholder="Phone" />
          </span>
          <input required type="number" placeholder="CNIC Number" />
          <input required type="text" placeholder="Street Address" />
          <input required type="text" placeholder="Home Address" />
          <span className="city-state-zip">
            <select>
              <option>Select city</option>
              <option>Karachi</option>
              <option>Hyderabad</option>
              <option>Umerket</option>
              <option>Larkana</option>
              <option>Sukhar</option>
              <option>Multan</option>
              <option>Islamabad</option>
              <option>--</option>
            </select>
            <input required type="text" placeholder="State" />
            <input required type="number" placeholder="Zip" />
          </span>
        </fieldset>
        <fieldset>
          <legend>Card Information</legend>
          <input required type="text" placeholder="Bank Name" />
          <input required type="text" placeholder="Card Holder Name" />
          <input required type="number" placeholder="Card Number" />
          <span className="card-exp-cvv">
            <label htmlFor="">
              Issue Date
              <input required type="date" />
            </label>
            <label htmlFor="">
              Expire Date
              <input required type="date" />
            </label>
            <input required type="password" placeholder="cvv" />
          </span>
        </fieldset>
        <span>
          <span>Subtotal</span>
          <span className="amount">${cart.cartTotalAmount}</span>
        </span>
        <div>
          <p>Are you sure you want to place this order?</p>
          <span>
            <label>
              Yes
              <input
                type="radio"
                name="choice"
                value="yes"
                checked={choice === "yes"}
                onChange={handleRadioChange}
              />
            </label>
            <label>
              No
              <input
                type="radio"
                name="choice"
                value="no"
                checked={choice === "no"}
                onChange={handleRadioChange}
              />
            </label>
            {choice === "yes" && <button>Place Order</button>}
          </span>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
