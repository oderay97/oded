import React from "react";
import Products from "./Products";
import back from '../img/azul2.jpg';
const Home = () => {
    return (
        
  <div className="hero"> 
  <div class="card bg-dark text-white border-0">
  <img src={back} class="card-img" alt="Background" height="550px" />
  
  <div class="card-img-overlay d-flex flex-column justify-content-center ">
    <div className="container">
    <h5 class="card-title display-3 fw-bolder mb-0">COMPRA AL POR MAYOR</h5>
    <p class="card-text"></p>
    <p class="card-text"></p>
  </div>
  </div>
</div>
<Products/>
</div>
        
    );
}

export default Home;
