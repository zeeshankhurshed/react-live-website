import React from 'react'
import { products } from '../db/db'
import Card from '../Components/Card'

function Items({products}) {
  return (
    <>
     <div className="row">
        
            {
               products.map(products=>{
                    return(
                        <div key={products.id} className="col-md-3 mt-3">
                            <Card products={products}/>
                        </div>
                    )
                })
            }
       
        </div> 
    </>
  )
}

export default Items
