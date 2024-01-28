import React from 'react';
import offer2 from '../assets/image/hero/offers2.png'
import offer3 from '../assets/image/hero/offers3.png'

const About = () => {
  return (
    <div>
      <div className="container-fluid">
    <div className="row">
    <div className="col-md-4 about-left ">
        <img src={offer2} alt="" />
        <img src={offer3} alt="" className='sm-img d-none d-md-block' />
</div>
<div className="col-md-8  about-right  bg-danger-subtle pe-5 pb-3  ">
  <div className="col-md-12 ps-md-5 ps-lg-0  ms-md-5 ms-lg-0">
  <h2>About Our Tailor house</h2>
    <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    </p>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim repellat, nam expedita odit nostrum a corrupti amet accusantium facilis non.
    </p>
  </div>
  
    <button className='btn btn-danger bg-gradient btn-lg '>MORE ABOUT US</button>
</div>
</div>
    </div>
    </div>
  );
}

export default About;
