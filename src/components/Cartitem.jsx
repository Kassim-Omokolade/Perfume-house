import React from "react";
import { useState, useContext } from "react";
import { CartContext } from "../Context";

const Cartitem = ({ id, image, title, price, quantity }) => {
  const { removeItemFromCart, handleIncrease ,handleDecrease, 
        } = useContext(CartContext);
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
              className={
                quantity <= 1
                  ? " main1-color-bg border-0 rounded-2 fw-bold"
                  : " main-color-bg border-0 rounded-2 fw-bold"
              }
              style={{ height: "30px" }}
              onClick={() => handleDecrease({ id, image, price, title })}
              disabled={quantity <= 1}
            >
              -
            </button>

            <h4> {quantity}</h4>
            <button
              className=" main-color-bg border-0 rounded-2 fw-bold"
              style={{ height: "30px" }}
              onClick={() => handleIncrease({ id, image, price, title })}
            >
              +
            </button>
          </div>
          <div className="d-flex gap-5">
            <p className=" pt-3 fw-bold ">N{price}</p>
            <button
              className="btn btn-outline-danger mt-2 "
              style={{ height: "35px", width: "100px" }}
              onClick={() => removeItemFromCart({ id, image, price, title })}
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
