import React from 'react'
import offer1 from '../assets/image/hero/offers1.png'
import offer2 from '../assets/image/hero/offers2.png'
import offer3 from '../assets/image/hero/offers3.png'

const Card = () => {
  return (
    <div>
      <div className="container pt-5 mt-md-5 ">
        <div className="row">
        <div class="col-md-4  card  " >
    <img src={offer1} class="card-img-top" alt="..."/>
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    </div>
    <div class="col-md-4  card" >
    <img src={offer2} class="card-img-top" alt="..."/>
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        <div class="col-md-4  card" >
    <img src={offer3} class="card-img-top" alt="..."/>
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Card
