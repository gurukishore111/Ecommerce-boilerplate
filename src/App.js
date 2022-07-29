import React from 'react'
import Homescreen from './screens/Homescreen'
import {
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Product from './screens/Product';


const App = () => {
  return (
    <div>
      <Header/>
    <Routes>
     
        

     <Route path="/" element={<Homescreen/>}/>
     <Route path="/product/:id" element={<Product/>} />
    


     

   </Routes>
 
    </div>
  )
}

export default App

