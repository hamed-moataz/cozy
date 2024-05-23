import { createContext, useState } from "react";
import { Link } from "react-router-dom";

export let CounterProvider = createContext(0);

function CounterContextProvider(props) {
  const [counter, setCounter] = useState(1);
  const [price, setPrice] = useState(149.99);
  const [countShrip, setCountShrip] = useState(1);
  const [priceShrip, setPriceShrip] = useState(169.99);
  const discount = 31.9;
  const total = price + priceShrip - discount;
  return (
    <CounterProvider.Provider
      value={{
        counter,
        setCounter,
        price,
        setPrice,
        countShrip,
        setCountShrip,
        priceShrip,
        setPriceShrip,
        total,
        discount,
      }}
    >
      {props.children}
    </CounterProvider.Provider>
  );
}

export default CounterContextProvider;
