import "./Payment.css"
import { Link } from 'react-router-dom'
import { FaCcVisa } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";

const Payment = () => {
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
                  <Link to="/shipping" >
                    Shipping
                  </Link>
                  <AiOutlineRight />
                </li>
                <li>
                  <Link to="/payment" className="active">Payment</Link>
                </li>
              </ul>
            </div>
            <div className="pay">
                <div className="title">
                <h3>Payment Method</h3>
                </div>
                <div className="choose">
                   <div className="input edit">
                   <input type="radio" />
                    <FaCcVisa style={{background:"#00579F" , color:"#F9A51A", fontSize:"24px"}} />
                    <span className='number'>•••• 6754</span>
                    <span>Expires 06/2021</span>
                   </div>
                    <div className='remove'>
                        <button>Remove</button>
                        </div>
                </div>
                <div className="choose">
                   <div className="input">
                   <input type="radio" />
                    <FaCcVisa style={{background:"#00579F" , color:"#F9A51A", fontSize:"24px"}} />
                    <span className='number'>•••• 5643</span>
                    <span>Expires 11/2025</span>
                   </div>
                    <div className='remove'>
                        <button>Remove</button>
                        </div>
                </div>
            </div>
          </div>
          <div className="right-shipping">
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
                  <button className="btn">Continue to Payment</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Payment
