import React, { useContext } from "react";
import { CounterProvider } from "./stor/Counter";
import { Link } from "react-router-dom";

const Order = ({ total , location }) => {
  let { discount } = useContext(CounterProvider);

  return (
    <>
      <div className="order">
        <h2>Order Summary</h2>
        <div className="detils">
          <div className="left-detils">
            <p>Price</p>
            <p>Discount</p>
            <p>Shipping</p>
            <p>Coupon Applied</p>
          </div>
          <div className="right-detils">
            <p>${total?.toFixed(2)}</p>
            <p>${discount}</p>
            <p> Free</p>
            <p>$0.00</p>
          </div>
        </div>
        <hr />
        <div className="bottom-order">
          <div className="total">
            <div className="left">
              <p>TOTAl</p>
              <p>Estimated Delivery by</p>
            </div>
            <div className="right">
              <p>${total?.toFixed(2)}</p>
              <p>01 Feb, 2023</p>
            </div>
          </div>
          <div className="input">
            <input type="text" placeholder="Coupon Code" />
            <Link to={location}>
              <button className="btn">Continue to Payment</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
