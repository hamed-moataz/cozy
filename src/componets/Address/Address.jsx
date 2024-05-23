import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import "./Address.css";
// import { CounterProvider } from '../stor/Counter';
import Order from "../Order";
import { CounterProvider } from "../stor/Counter";

const Address = () => {
  // let {price , discount , total , priceShrip} = useContext(CounterProvider)

  let {total, location}  = useContext(CounterProvider);
  return (
    <section>
      <div className="container">
        <div className="content">
          <div className="left-address">
            <div className="links">
              <ul>
                <li>
                  <Link to="/address" className="active">
                    Address
                  </Link>
                  <AiOutlineRight />
                </li>
                <li>
                  <Link to="/shipping">Shipping</Link>
                  <AiOutlineRight />
                </li>
                <li>
                  <Link to="/payment">Payment</Link>
                </li>
              </ul>
            </div>
            <div className="pay">
              <div className="title">
                <h3>Address</h3>
              </div>
              <div className="content">
                <div className="frist">
                  <div className="radio">
                    <div className="chose">
                      <input type="radio" checked />
                      <span>Huzefa Bagwala</span>
                      <span>HOME</span>
                    </div>
                    <div className="edit">
                      <button>Edit</button>
                      <button>ٌRemove</button>
                    </div>
                  </div>
                  <div className="detils">
                    <p>1131 Dusty Townline, Jacksonville, TX 40322</p>
                    <p>Contact - (936) 361-0310</p>
                  </div>
                </div>
                <div className="frist">
                  <div className="radio">
                    <div className="chose">
                      <input type="radio" />
                      <span>IndiaTech</span>
                      <span>Office</span>
                    </div>
                    <div className="edit">
                      <button>Edit</button>
                      <button>ٌRemove</button>
                    </div>
                  </div>
                  <div className="detils">
                    <p>1219 Harvest Path, Jacksonville, TX 40326</p>
                    <p>Contact - (936) 361-0310</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-address">
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
               <p>${total.toFixed(2)}</p>
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
                 <p>${total.toFixed(2)}</p>
                 <p>01 Feb, 2023</p>
               </div>
             </div>
             <div className="input">
               <input type="text" placeholder="Coupon Code" />
               <Link to='/shipping'><button className="btn">Continue to Payment</button></Link>
             </div>
           </div>
         </div> */}
            <Order total={total} location={"/shipping"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Address;
