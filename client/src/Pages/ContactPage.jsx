import React from 'react'
import BreadComb from '../Component/BreadComb'
import Contact from '../Component/Contact'
import Map from '../Component/Map'

const ContactPage = () => {
  return (
    <>
         <div>
        <BreadComb />
      <div className="container breadcrumb-title ">
        <h2 className='text-danger' >Contact Us
            <div className="line"></div>
        </h2>
      </div>
      
    </div>
    <div className="container-fluid pt-3 bg-secondary-subtle">
        <div className="row">
            <div className="col-md-6">
            <Map/>
            </div>
            <div className="col-md-6">
<Contact/>
            </div>
        </div>
    </div>
    </>
  )
}

export default ContactPage
