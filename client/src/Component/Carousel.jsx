import React from 'react'
import product1 from '../assets/image/product/a.jpg'
import product2 from '../assets/image/product/a2.jpg'
import product3 from '../assets/image/product/g2.jpg'

const Carousel = () => {
  return (
    <div>
        <div id="carouselId" class="carousel slide " data-bs-ride="carousel">
        <ol class="carousel-indicators list-unstyled">
            <li data-bs-target="#carouselId" data-bs-slide-to="0" class="active" aria-current="true" aria-label="First slide"></li>
            <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide"></li>
            <li data-bs-target="#carouselId" data-bs-slide-to="2" aria-label="Third slide"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
                <img src={product1} class="w-100 d-block" alt="First slide"/>
                <div class="carousel-caption  d-md-block">
                </div>
            </div>
            <div class="carousel-item">
                <img src={product2} class="w-100 d-block" alt="Second slide"/>
                <div class="carousel-caption  d-md-block">
                    {/* <h3>Elevate Your Online Presence</h3>
                    <p>Unlock Success with Expert Web Development and Design Services</p> */}
                </div>
            </div>
            <div class="carousel-item">
                <img src={product3} class="w-100 d-block" alt="Third slide"/>
                <div class="carousel-caption d-md-block">
                    {/* <h3>Strategic Solutions for Your Brand</h3>
                    <p>No worries, Mykel Digitalz Has You Covered</p> */}
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    
    </div>
  )
}

export default Carousel
