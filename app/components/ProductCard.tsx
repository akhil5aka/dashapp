


import React from 'react'
import Addtocart from './Addtocart';
import Styles from './ProductCard.module.css'
const ProductCard = () => {
  return (
    <main>

    <div className='p-6 my-6 bg-sky-400 text-white text-2xl hover:bg-green-400'>
      ProductCard
      <Addtocart/>
    </div>
    </main>

  )
}

export default ProductCard
