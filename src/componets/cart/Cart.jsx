import white from "./../../assets/images/8.jpg";
import green from "./../../assets/images/9.jpg";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { MdOutlinePercent } from "react-icons/md";
import "./cart.css";
import { CounterProvider } from "../stor/Counter";
import { useContext, useState } from "react";
import Order from "../Order";
import { useEffect } from "react";
import axios from "axios";
const Cart = () => {
  const URL = "http://localhost:3000/products";

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(URL).then((products) => setProducts(products.data));
  }, []);

  let {
    counter,
    setCounter,
    price,
    setPrice,
    countShrip,
    setCountShrip,
    priceShrip,
    setPriceShrip,
    total,
  } = useContext(CounterProvider);

  return (
    <div className="con">
      <div className="g col4">
        <div className="leftSide colspan3 pr-10">
          <div className="f alingC  jl gap-5">
            <h1>Cart</h1>
            <p className="pt-7">2 items</p>
          </div>
          {products.map((product) => (
            <div key={product.id} className="items pt-20 g col5 ">
              <img src={product.img} alt="" width={160} height={160} />
              <div className="data colspan3 f fcol txtl jc">
                <h2>{product.title}</h2>
                <div className="color">
                  Color: <span>{product.color}</span>
                </div>
                <div className="amount pt-5 f gap-5 alingC">
                  <div className="border-gray p-2 f alingC gap-5 jaround">
                    <FaMinus
                      className="pointer"
                      onClick={() => {
                        setCounter(counter - 1);
                        setPrice(price - 149.99);
                      }}
                    />
                    <p className="txt20">{counter}</p>
                    <FaPlus
                      className="pointer"
                      onClick={() => {
                        setCounter(counter + 1);
                        setPrice(price + 149.99);
                      }}
                    />
                  </div>
                  <p className="txtred pointer">Remove</p>
                </div>
              </div>
              <div className="price f jend pt-5 bold">
                <p>${price.toFixed(2)}</p>
              </div>
              <hr className="border-gray mt-5 w100" />
            </div>
          ))}
          {/* <div className="items pt-20 g col5 ">
            <img src={white} alt="" width={160} height={160} />
            <div className="data colspan3 f fcol txtl jc">
              <h2>Osmond Armchair</h2>
              <div className="color">
                Color: <span>Gunnared biege</span>
              </div>
              <div className="amount pt-5 f gap-5 alingC">
                <div className="border-gray p-2 f alingC gap-5 jaround">
                  <FaMinus
                    className="pointer"
                    onClick={() => {
                      setCounter(counter - 1);
                      setPrice(price - 149.99);
                    }}
                  />
                  <p className="txt20">{counter}</p>
                  <FaPlus
                    className="pointer "
                    onClick={() => {
                      setCounter(counter + 1);
                      setPrice(price + 149.99);
                    }}
                  />
                </div>
                <p className="txtred pointer">Remove</p>
              </div>
            </div>
            <div className="price f jend pt-5 bold">
              <p>${price}</p>
            </div>
          </div> */}
          {/* <hr className="border-gray mt-5" /> */}
          {/* product 2 */}
          {/* <div className="pt-20 g col5 ">
            <img src={green} alt="" width={160} height={160} />
            <div className="data colspan3 f fcol txtl jc">
              <h2>Meryl Lounge Chair</h2>
              <div className="color">
                Color: <span>Lysed bright green</span>
              </div>
              <div className="amount pt-5 f gap-5 alingC">
                <div className="border p-2 f alingC gap-5 jaround">
                  <FaMinus
                    className="pointer"
                    onClick={() => {
                      setCountShrip(countShrip - 1);
                      setPriceShrip(priceShrip - 169.99);
                    }}
                  />
                  <p className="txt20">{countShrip}</p>
                  <FaPlus
                    className="pointer"
                    onClick={() => {
                      setCountShrip(countShrip + 1);
                      setPriceShrip(priceShrip + 169.99);
                    }}
                  />
                </div>
                <p className="txtred">Remove</p>
              </div>
            </div>
            <div className="price f jend pt-5 bold">
              <p>${priceShrip}</p>
            </div>
          </div> */}
          {/* <div className="notice  border f alingC p-2">
            <MdOutlinePercent color="green" size={20} />
            <p>
              10% Instant Discount with Federal Bank Debit Cards on a min spend
              of $150. TCA
            </p>
          </div> */}
        </div>
        <div className="summary border p-5">
          <Order total={total} location="/address" />
        </div>
      </div>
    </div>
  );
};

export default Cart;
