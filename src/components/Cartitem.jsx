import React from "react";
import { useState } from "react";

const Cartitem = ({ id, image, title, price }) => {
  const [num, setNum] = useState(0);
  const handleDecreaseNum = () => {
    setNum(num - 1);
  };
  const handleIncreaseNum = () => {
    setNum(num + 1);
  };

  const removeItem = (itemId) => {
    const remainingProducts = cart.filter((cartItem) => cartItem.id !== itemId);
    setCart(remainingProducts);
  };

  return (
    <div className=" mb-3 p-3">
      <div className="d-flex gap-2">
        <div>
          <img
            src={image}
            alt={title}
            style={{ width: "95px", height: "110px" }}
          />
        </div>
        <div>
          <h2 className="fs-5 fw-bold mb-3 ">{title}</h2>
          <div className="d-flex gap-3 ">
            <button
              onClick={handleDecreaseNum}
              className=" main1-color-bg border-0 rounded-2 fw-bold"
              style={{ height: "30px" }}
            >
              -
            </button>
            <h4>{num}</h4>
            <button
              onClick={handleIncreaseNum}
              className=" main-color-bg border-0 rounded-2 fw-bold"
              style={{ height: "30px" }}
            >
              +
            </button>
          </div>
          <div className="d-flex gap-5">
            <p className=" pt-3 fw-bold ">N{price}</p>
            <button
              onClick={() => removeItem(cartItem.id)}
              className="btn btn-outline-danger mt-2 "
              style={{ height: "35px", width: "100px" }}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;
