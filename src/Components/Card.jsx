import React from 'react'

function Card({products}) {
  return (
    <>
     <div className="card text-center h-100">
  <img src={products.image} className="card-img-top w-50 h-75 mx-auto" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{products.title.slice(0,18)}...</h5>
    <p className="card-text">{products.description.slice(0,80)}...</p>
    <p className="card-text">Price:${products.price}</p>
    <p className="card-text">{products.category}</p>
    <div className="d-flex justify-content-between ">
    <p className="card-text">Rate:{products.rating.rate}</p>
    <p className="card-text">Count:{products.rating.count}</p>
    </div>
   
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div> 
    </>
  )
}

export default Card
