import React from 'react'
import icon1 from '../assets/image/icon/services1.png'
import icon2 from '../assets/image/icon/offers-icon1.png'
import icon3 from '../assets/image/icon/offers-icon2.png'

const Service = () => {
  return (
    <div>
        <div className="container service pt-5 ">
        <div className="service-title">
        <h2>Why use our Service ?</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque 
            </p>
        </div>

            <div className="row">
            <div className="col-md-6 col-lg-3 ">
                <div className="icon">
                    <img src={icon1} alt="" />
                    <h6>Tailor Sewing</h6>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto dolorum recusandae inventore asperiores ea accusamus.</p>
                </div>
            </div>
            <div className="col-md-6 col-lg-3">
            <div className="icon">
                    <img src={icon2} alt="" />
                    <h6>Tailor Sewing</h6>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto dolorum recusandae inventore asperiores ea accusamus.</p>
                </div>
            </div>
            <div className="col-md-6 col-lg-3">
            <div className="icon">
                    <img src={icon3} alt="" />
                    <h6>Tailor Sewing</h6>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto dolorum recusandae inventore asperiores ea accusamus.</p>
                </div>
            </div>
            <div className="col-md-6 col-lg-3">
            <div className="icon">
                    <img src={icon1} alt="" />
                    <h6>Tailor Sewing</h6>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto dolorum recusandae inventore asperiores ea accusamus.</p>
                </div>
            </div>
        </div>
            
        </div>
       
      
    </div>
  )
}

export default Service
