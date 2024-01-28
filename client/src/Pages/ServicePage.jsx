import React from 'react'
import BreadComb from '../Component/BreadComb'
import Service from '../Component/Service'

const ServicePage = () => {
  return (
    <>
    <div>
        <BreadComb />
      <div className="container breadcrumb-title ">
        <h2 className='text-danger' >Our Service
            <div className="line"></div>
        </h2>
      </div>
      <Service/>
      
    </div>
    </>
  )
}

export default ServicePage
