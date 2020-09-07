import React from 'react'
import './Imagescarousel.css'


const Imagescarousel=()=>
{return(
<div id="myCarousel" class="carousel slide" data-ride="carousel">


  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>
  
 
  <div class="carousel-inner">
    <div class="item active">
     <center> <img src="/images/pizza.jpg" alt="Pizza" /></center>
    </div>
    <div class="item">
    <center> <img src="/images/cheesecake.jpg" alt="cheesecake" /></center>
    </div>
    <div class="item">
    <center> <img src="/images/burger.jpg" alt="burger" /></center>
    </div>
  </div>
  
  
  <a class="left carousel-control" href="#myCarousel" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#myCarousel" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
)
}

export default Imagescarousel;