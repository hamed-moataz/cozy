import React, { useContext } from 'react'
import "./Payment.css"
import { Link } from 'react-router-dom'
import { FaCcVisa } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";
import Order from '../Order';
import { CounterProvider } from '../stor/Counter';

const Payment = () => {
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
            <Order total = {total} location={"/"} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Payment
