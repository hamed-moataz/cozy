import { FaMinus, FaPlus } from "react-icons/fa";
import { MdOutlinePercent } from "react-icons/md";
import { RiCouponLine } from "react-icons/ri";
import CartContext from '../../Features/cartContext';
import "./cart.css";
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Cart = () => {
  const URL = "http://localhost:3000/products";

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(URL).then(products => setProducts(products.data));
  }, []);

  const { cart, addToCart, removeFromCart, clearCart } = useContext(CartContext);

  const handleAddToCart = (productId) => {
    addToCart(productId);
  };

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  // Calculate total price of all items
  const totalPriceOfItems = products.reduce((total, product) => {
    const quantityInCart = cart.filter(item => item === product.id).length;
    return total + product.price * quantityInCart;
  }, 0);

  // Calculate total price after discount
  const discount = totalPriceOfItems *.10; // Sample discount
  const totalPriceAfterDiscount = totalPriceOfItems - discount;

  return (
    <div className="con">
      <div className="g col4">
        <div className="leftSide colspan3 pr-10">
          <div className="f alingC  jl gap-5">
            <h1>Cart</h1>
            <p className='pt-7'>{cart.length} items</p>
          </div>
          {/* product 1 */}
          {products.map(product => {
            const quantityInCart = cart.filter(item => item === product.id).length;
            const totalPrice = product.price * quantityInCart;
            return (
              <div key={product.id} className="items pt-20 g col5 ">
                <img src={product.img} alt="" width={160} height={160}/>
                <div className="data colspan3 f fcol txtl jc">
                  <h2>{product.title}</h2>
                  <div className="color">Color: <span>{product.color}</span></div>
                  <div className="amount pt-5 f gap-5 alingC">
                    <div className="border-gray p-2 f alingC gap-5 jaround">
                      <FaMinus className='pointer' onClick={() => handleRemoveFromCart(product.id)}/>
                      <p className='txt20'>{quantityInCart}</p>
                      <FaPlus className='pointer' onClick={() => handleAddToCart(product.id)}/>
                    </div>
                    <p className='txtred pointer' onClick={() => clearCart(product.id)}>Remove</p>
                  </div>
                </div>
                <div className="price f jend pt-5 bold">
                  <p>${totalPrice.toFixed(2)}</p>
                </div>
                <hr className='border-gray mt-5'/>
              </div>
            );
          })}
          <div className="notice  border f alingC p-2">
            <MdOutlinePercent color='green' size={20}/>
            <p>
              10% Instant Discount with Federal Bank Debit Cards on a min spend of $150. TCA
            </p>
          </div>
        </div>
        {/* rightSide */}
        <div className="summary border p-5">
          <h3 className='txtl bold pb-10'>Order Summary</h3>
          <div className="f fcol gap-8 capital">
            <div className="f jbetween">
              <p>price</p>
              <p>${totalPriceOfItems.toFixed(2)}</p>
            </div>
            <div className="f jbetween">
              <p>discount</p>
              <p>${discount.toFixed(2)}</p>
            </div>
            <div className="f jbetween">
              <p>shipping</p>
              <p>free</p>
            </div>
            <div className="f jbetween">
              <p>Coupon Applied</p>
              <p>$0.00</p>
            </div>
            <hr className='border'/>
            <div className="f jbetween">
              <p>TOTAL</p>
              <p className='bold'>${totalPriceAfterDiscount.toFixed(2)}</p>
            </div>
            <div className="f jbetween">
              <p>Estimated Delivery by</p>
              <p>01 Feb, 2023</p>
            </div>
            <div className="border  txtl f jbetween alingC p-2">
              <input type="text" placeholder='Coupon Code' className='input'/>
              <RiCouponLine />
            </div>
            <Link to="/address" className='btn'>Proceed to Checkout</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
