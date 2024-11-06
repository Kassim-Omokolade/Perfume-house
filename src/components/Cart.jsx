import React from 'react'
import { perfumes } from '../data';
import Cartitem from './Cartitem';


const Cart = () => {
  return (
    <div style={{ border: "1px solid #d0d0d0" }}>
      <h1 className="cartheading mb-4 mt-3 p-3">My cart Preview</h1>
      <div className=" ">
        {perfumes.map((perfume) => {
          return <Cartitem key={perfume.id} {...perfume} />;
        })}
      </div>

      <div className='p-3'>
        <div className="d-flex flex-column pt-5">
          <div className="d-flex justify-content-between">
            <p>Sub Total</p>
            <p>#0.00</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Delivery</p>
            <p>#0.00</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Total</p>
            <p>#0.00</p>
          </div>
        </div>
        <button
          style={{ height: "40px" }}
          className="w-100 rounded-2 main-color-bg text-white border-0"
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
}

export default Cart