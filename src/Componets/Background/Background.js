import React from 'react'
import './Background.css'

export default function Background() {

    
  return (
   <>
   <div id="demo" className="carousel slide" data-bs-ride="carousel" style={{marginBottom:"40px" , boxShadow:"10px 10px 10px black"}}>




  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
  

  <div className="carousel-inner">
 
    <div className="carousel-item active">

      <img src="http://mooseoom.foxthemes.me/wp-content/uploads/2019/11/banner-his.jpg" alt="Los Angeles" class="d-block" style= {{width:"100%", height:"600px"}} placeholder='hbib'/>

    </div>
    <div className="carousel-item">
      <img src="http://mooseoom.foxthemes.me/wp-content/uploads/2019/11/magazine-banner.jpg" alt="Chicago" class="d-block" style= {{width:"100%", height:"600px"}}/>
    </div>
    <div className="carousel-item">
      <img src="http://mooseoom.foxthemes.me/wp-content/uploads/2019/10/gallery-banner.jpg" alt="New York" class="d-block" style= {{width:"100%",height:"600px"}}/>
    </div>
  </div>
  
 
  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>

  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>
</div>

  


   </>
  )
}
