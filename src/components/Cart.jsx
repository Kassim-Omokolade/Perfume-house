import React from 'react'
import { perfumes } from '../data';
import Cartitem from './Cartitem';


const Cart = () => {
  return (
    <div style={{border:"1px solid #d0d0d0"}}>
      <h1 className="cartheading mb-4 mt-3 p-3">My cart Preview</h1>
      <div className=' '>
        {
           perfumes.map((perfume)=>{
               return <Cartitem key={perfume.id} {...perfume}/>
           }

          ) }


      </div>
        

    </div>
  );
}

export default Cart