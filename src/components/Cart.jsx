import React, { useState, useContext } from "react";
import { perfumes } from "../data";
import Cartitem from "./Cartitem";
import { CartContext } from "../Context";
import ConfirmOrderModal from "./ConfirmOrderModal";

const Cart = () => {
  const { cart, totalPrice, setShowModal, showModal, confirmOrder } =
    useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="rounded-2 border border-1 border-secondary p-2">
        <h2 className="fs-4 mb-4">My Cart Preview</h2>
        <h3 className="fs-5 text-danger">Cart is Empty</h3>
      </div>
    );
  }

  return (
    <div style={{ border: "1px solid #d0d0d0" }}>
      {showModal && (
        <ConfirmOrderModal showModal={showModal} setShowModal={setShowModal} />
      )}
      <h1 className="cartheading mb-4 mt-3 p-3">My cart Preview</h1>
      <div className=" ">
        {cart.map((perfume) => {
          return <Cartitem key={perfume.id} {...perfume} />;
        })}
      </div>

      <div className="p-3">
        <div className="d-flex flex-column pt-">
          <div className="d-flex justify-content-between">
            <p>Sub Total</p>
            <p>#{totalPrice}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Delivery</p>
            <p>#2000</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Total</p>
            <p>{totalPrice + 2000} </p>
          </div>
        </div>
        <button
          style={{ height: "40px" }}
          className="w-100 rounded-2 main-color-bg text-white border-0"
          onClick={confirmOrder}
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
