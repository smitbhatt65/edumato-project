import React from 'react';
import {Link} from 'react-router-dom'

const DetailDisplay = (props) => {
    console.log(props.length)
    let a=props.length;
    
    const maprestaurants = ({restdata}) => {
        //if(a===0)
        //return(
        //    <h1 >No Restaurants Available</h1>
       // )
         if(restdata){
            return restdata.map((item) => {
                return(
                    <Link to={`/rest/${item._id}`}>
                    <div className="row" id="tile">
               <div className="col-md-3"  >
               <img className="img-responsive"  src={item.thumb} alt="image"  ></img>               
               </div>
               <div className="col-md-7" >
                   <div className="heading">
                       {item.name}
                   </div>
                   <div>
               city:{item.city_name}<br/>
               locality:{item.locality}<br/>
               address:{item.address}<br/>
               cost for two:{item.cost}<br/>
               mealtype:{item.type[0].name}&nbsp;{item.type[1].name}<br/>
               cuisine:{item.Cuisine[0].name} &nbsp; {item.Cuisine[1].name}
               <hr/>
   
                   </div>
                  
               </div>
   
           </div>
           </Link>
                )
            })
        }
        
       
    }
 
    return(
        <div className="container">
            <center><h3>Restaurants List</h3></center>
         
            {maprestaurants(props)}

            
        </div>
    )
}

export default DetailDisplay;