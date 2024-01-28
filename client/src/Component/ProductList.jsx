import React, { useState } from 'react';

const ProductList = ({ products, addToCart }) => {




  return (
    <div className='product-list'>
      {/* <h3 className="text-center ">Top Products</h3> */}
      <ul >
        {products.map((product) => (
          <li key={product.id}>
            <div className='product-container'>
              <strong>{product.name}</strong>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
            
          </li>
          
        ))}
      
      </ul>
    </div>
  );
};

export default ProductList;
