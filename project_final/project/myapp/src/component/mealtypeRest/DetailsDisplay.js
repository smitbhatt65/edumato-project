import React from 'react';
import {Link} from 'react-router-dom'
import './Details.css'

const DetailDisplay = (props) => {
    console.log(props.length)


  
    
    const maprestaurants = ({restdata}) => {
        if(restdata.length===0)
        {return(
            <h1 >Sorry,No Restaurants Available!</h1>
        )}
        else if(restdata){
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
           
   
                   </div>
                  
               </div>
   
           </div>
           &nbsp;
        
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