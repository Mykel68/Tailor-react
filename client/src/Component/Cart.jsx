import React from 'react';

const Cart = ({ cart }) => {
  return (
    <div className='cart'>
      <h5 className="text-center ">Shopping Cart</h5>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <div>
              <strong>{item.name}</strong>
              <p>${item.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
