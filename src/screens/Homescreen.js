import React from 'react'

import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {listProducts} from '../actions/productActions'

import { Link } from 'react-router-dom'
import Rating from '../components/Rating'



const Homescreen = () => {
    // const [products,setProducts]=useState([])
    const dispatch=useDispatch()
    const productList=useSelector(state=>state.productList)

    const{loading,error,products}=productList
    useEffect(()=>{
        // const fetchProducts=async()=>{
        //     const {data}=await axios.get('/products')
        //     setProducts(data)

        // }
        // fetchProducts()
        dispatch(listProducts())
    },[dispatch])
 
    return (

        <div className="homescreen">
            {loading?(
                <h2>Loading...</h2>
            ):error?(
                <h3>{error}</h3>

            ):(
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
            )
            }
           
               
           
        </div>
    )
}



export default Homescreen
