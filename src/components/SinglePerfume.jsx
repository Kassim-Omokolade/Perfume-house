import React from 'react'

const SinglePerfume = ({id,image,title,price,itemsLeft,rating,oldPrice}) => {

  return (
    <div style={{width:"256.62px"}} className='border border-1 border-secondary rounded-2 mx-auto'>
        <img src={image} alt={title} className='w-100'/>
        <div className='p-3'>
             <h2 className='fs-6 fw-bold mb-2'>{title}</h2>
             <div className='d-flex gap-2 mb-0'>
                <p className='text-dark fw-bold'>stars{rating.toFixed(1)}</p>
                <p className='text-secondary'>({itemsLeft})</p>

             </div>
             <div className='d-flex gap-2'>
                  <h2 className='fs-6 maincolor'>#{price}</h2>
                  <h2 className='fs-6 text-decoration-line-through text-secondary'>#{oldPrice}</h2>
             </div>
             <button style={{height:"40px"}} className='w-100 rounded-2 main-color-bg text-white border-0'> 
                Add To Cart
             </button>
        </div>
    </div>
  )
}

export default SinglePerfume