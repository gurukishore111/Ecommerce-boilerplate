import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'


import { Link } from 'react-router-dom'
import Rating from '../components/Rating'



const Homescreen = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        const fetchProducts=async()=>{
            const {data}=await axios.get('/products')
            setProducts(data)

        }
        fetchProducts()
    },[])
    return (
        <div className="homescreen">
            
           <div className="prodcontainer">
                {products.map(product=>(
                     <div key={product.id} className="prod">
                      <div className="cardproduct">
       
   
                        < img alt="/" srcSet="" src={product.image} id="cardprodimg" height="300px"/>
                        <Link to={`/product/${product.id}`} className="prodlink">
                            <div className="cardprodtitle">
                        <strong className="cardprodtitle">
                           {product.title}
                        </strong>
                        </div>
                        <div className="cardrev">
                        <Rating value={parseInt(product.rating)} />
                         </div>
                         <div id="textprod">Rs.{product.amount}</div>
                         </Link>
                         <button className="favbutton" >Add to Fav</button>
                        </div>
                     </div>
                ))}
                </div>
               
           
        </div>
    )
}



export default Homescreen
