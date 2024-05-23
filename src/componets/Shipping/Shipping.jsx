import { Link } from "react-router-dom";
import "./Shipping.css";
import React, { useContext } from "react";
import { AiOutlineRight } from "react-icons/ai";
import Order from "../Order";
import { CounterProvider } from "../stor/Counter";

const Shipping = () => {
  let {total} = useContext(CounterProvider)
  return (
    <section>
      <div className="container">
        <div className="content">
          <div className="left-shipping">
            <div className="links">
              <ul>
                <li>
                  <Link to="/address">Address</Link>
                  <AiOutlineRight />
                </li>
                <li>
                  <Link to="/shipping" className="active">
                    Shipping
                  </Link>
                  <AiOutlineRight />
                </li>
                <li>
                  <Link to="/payment">Payment</Link>
                </li>
              </ul>
            </div>
            <div className="main-content">
              <div className="radio">
                <div className="r-left">
                  <input type="radio" id="free" checked />
                  <label htmlFor="free">free</label>
                  <span>Regular Shipment</span>
                </div>
                <div className="r-right">
                  <span className="data">01 Feb, 2023</span>
                </div>{" "}
              </div>
              <div className="radio">
                <div className="r-left">
                  {" "}
                  <input type="radio" id="number" />
                  <label htmlFor="number">$8.50</label>
                  <span>Priority Shipping</span>
                </div>
                <div className="r-right">
                  {" "}
                  <span className="data">28 Jan, 2023</span>
                </div>
              </div>
              <div className="radio">
                <div className="r-left">
                  <input type="radio" id="Schedule" />
                  <label htmlFor="Schedule">Schedule</label>
                  <span>Schedule </span>
                  <span className="choose">Choose a date that works for you.</span>
                </div>
                <div className="r-right">
                  <select name="Select data" id="select">
                    <option value="1">Select date</option>
                    <option value="2">5- april - 2023</option>
                    <option value="3">20 - may - 2023</option>
                    <option value="4">1 - may - 2023</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="right-shipping">
            {/* <div className="order">
              <h2>Order Summary</h2>
              <div className="detils">
                <div className="left-detils">
                  <p>Price</p>
                  <p>Discount</p>
                  <p>Shipping</p>
                  <p>Coupon Applied</p>
                </div>
                <div className="right-detils">
                  <p>$319.98</p>
                  <p>$31.9</p>
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
                    <p>$288.08</p>
                    <p>01 Feb, 2023</p>
                  </div>
                </div>
                <div className="input">
                  <input type="text" placeholder="Coupon Code" />
                  <Link to='/payment'><button className="btn">Continue to Payment</button></Link>
                </div>
              </div>
            </div> */}
         <Order total = {total} location={"/payment"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shipping;
