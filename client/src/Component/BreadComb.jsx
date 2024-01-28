import React from 'react'
import Bread from '../assets/image/hero/h2_hero2.png'
import Comb from '../assets/image/hero/hero2.png'

const BreadComb = () => {
  return (
    <div>
      <div className="container-fluid breadcrumb">

            <img src={Comb} alt="" />
            <img src={Bread} alt="" className='d-none d-md-block' />

      </div>
    </div>
  )
}

export default BreadComb
