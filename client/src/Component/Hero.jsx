import React from 'react';
import icon from '../assets/image/icon/hero-icon.png'
import offer1 from '../assets/image/hero/offers1.png'


const Hero = () => {
  return (
    <div>
        <div className="container-fluid bg-secondary hero  pb-3 ">
            <div className="container">
                <div className="row  ">
                    <div className="col-md-6 mt-5 pt-5 ps-5">
                        <img src={icon} alt="" srcset="" className='mb-4' />
                        <h3 className='' >We make cloths that suit you
                        </h3>
                        <p className=''>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore quae perferendis quod commodi odio, earum accusamus voluptatum quidem facilis deleniti enim iure dignissimos quasi. Accusamus.
                        </p>
                        <button className='btn btn-danger bg-gradient btn-lg'>OUR SERVICES</button>
                    </div>
                    <div className="col-md-6 hero-right d-none d-md-block">
                            <img src={offer1}  />
                    </div>
                </div>
            </div>
        </div>
        
    
        
    </div>
  );
}

export default Hero;
