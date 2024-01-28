import React from 'react'
import Search from '../Component/Search'
import BreadComb from '../Component/BreadComb'
import TopBar from '../Component/TopBar'
import Product from '../Component/Product'
import Carousel from '../Component/Carousel'

const ProductPage = () => {
  return (
    <div>
      <BreadComb/>
      <div className="container breadcrumb-title   ">
        <h2 className='text-danger' >Our Product
            <div className="line"></div>
        </h2>
      </div>
      <div>
      <div className="container-fluid pt-5  ">
        <TopBar/>
        <Search/>
        <Product/>
      </div>
      <div className="container-fluid mb-567">
        <h3 className='text-center p-2'>New Product</h3>
          <div className="row">
          <div className="col-sm-6">
            <Carousel/>
          </div>
          <div className="col-sm-6">
            <h6>Top picks</h6>
          </div>
          </div>
      </div>
    </div>

      
  

    </div>
  )
}

export default ProductPage
