import white from '../../assets/images/item1.jpg'
import green from '../../assets/images/item2.png'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { MdOutlinePercent } from "react-icons/md";
import { RiCouponLine } from "react-icons/ri";
import "./cart.css"
const Cart = () => {
  return (
    <div className="con">
      <div className="g col4">
      <div className="leftSide colspan3 pr-10">
        <div className="f alingC  jl gap-5">
          <h1>Cart</h1>
        <p className='pt-7'>2 items</p>
        </div>
        {/* product 1 */}
        <div className="items pt-20 g col5 ">
    <img src={white} alt="" width={160} height={160}/>
      <div className="data colspan3 f fcol txtl jc">
        <h2>Osmond Armchair</h2>
        <div className="color">Color: <span>Gunnared biege</span></div>
        <div className="amount pt-5 f gap-5 alingC">
          <div className="border-gray p-2 f alingC gap-5 jaround">
          <FaMinus className='pointer '/>
          <p className='txt20'>1</p>
          <FaPlus className='pointer '/>
            </div> 
            <p className='txtred pointer'>Remove</p>
        </div>
      </div>
      <div className="price f jend pt-5 bold">
        <p>$149.99</p>
      </div>
        </div>
        <hr  className='border border-gray-200 mt-5'/>
        {/* product 2 */}
        <div className="items pt-20 g col5 ">
    <img src={green} alt="" width={160} height={160}/>
      <div className="data colspan3 f fcol txtl jc">
        <h2>Meryl Lounge Chair</h2>
        <div className="color">Color: <span>Lysed bright green</span></div>
        <div className="amount pt-5 f gap-5 alingC">
          <div className="border p-2 f alingC gap-5 jaround">
          <FaMinus className='pointer'/>
          <p className='txt20'>1</p>
          <FaPlus className='pointer'/>
            </div> 
            <p className='txtred pointer'>Remove</p>
        </div>
      </div>
      <div className="price f jend pt-5 bold">
        <p>$169.99</p>
      </div>
        </div>
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
          <p>$319.98</p>
        </div>
        <div className="f jbetween">
          <p>discount</p>
          <p>$31.9</p>
        </div>
        <div className="f jbetween">
          <p>shipping</p>
          <p>free</p>
        </div>
        <div className="f jbetween">
          <p>Coupon Applied</p>
          <p>$0.00</p>
        </div>
        <hr className='border '/>
        <div className="f jbetween">
          <p>TOTAL</p>
          <p className='bold'>$288.08</p>
        </div>
        <div className="f jbetween">
          <p>Estimated Delivery by</p>
          <p>01 Feb, 2023</p>
        </div>
        <div className="border  txtl f jbetween alingC p-2">
          <input type="text" placeholder='Coupon Code' className='input'/>
          <RiCouponLine />
        </div>
        <button className='btn'>Proceed to Checkout</button>
      </div>
    </div>
      </div>
    </div>
  )
}

export default Cart