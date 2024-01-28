// Home.js

import React, { useState } from 'react';
import SideBar from '../Component/SideBar';
import Search from '../Component/Search';
import ProductList from '../Component/ProductList';
import Cart from '../Component/Cart';
import products from '../Component/Product_items'; // Update the path
import { useAuth } from '../AuthContext'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { user } = useAuth();
  const [cart, setCart] = useState([]);

  const { isAuthenticated } = useAuth();

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const navigate = useNavigate()

  const Checkuser  = () => {
    if(!isAuthenticated)
    navigate('/login')
  }

  Checkuser()


  return (
    <div>
      <div className="d-flex mt-5">
        <div className="col-sm-2 d-none d-md-block">
          <SideBar />
        </div>
        <div className="col-sm-9 ">
          {/* <div className="d-flex"> */}
          <div className="user p-2 m-1">
            <img src="" alt="" />
        
          <h2>{user ? user.name : 'Guest'}!</h2>
          </div>
          <Search />
          {/* </div> */}
          <div className="  ">
            <h3 className='text-center'>Top Product</h3>
            <ProductList products={products} addToCart={addToCart} />
          </div>
        </div>
        <div className="col-sm-1  mt-5 pt-5 d-sm-block d-none">
          <Cart cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default Home;
