import React,{Component} from 'react';
import axios from 'axios';

const restdetail="http://localhost:8900/restaurantlist";
class SortFilter extends Component
{
    
     sortFilter=(event)=>{
    
        let mealid=parseInt(this.props.mealIdNumber);
        let cityid=parseInt(this.props.citiIdNo);
        let sort=parseInt(event.target.value);
        let url;
        if(sort==='')
        url=`${restdetail}/${cityid}/${mealid}?sort=1`;
        else
        url=`${restdetail}/${cityid}/${mealid}?sort=${sort}`;

        axios.get(url)
        .then(response=>{this.props.restpersort(response.data)})
        
    }

    render()
    {
        return(
            <>
            <center>Sort</center>
            <hr/>
            <div onChange={this.sortFilter}>
            
            <input type="radio" id="ascending" name="sort" value="1" />
            <label for="ascending" className="radio">low to high</label> 
            <br/>
            <input type="radio" id="descending" name="sort" value="-1"/>
            <label for="descending" className="radio">High to low </label>
            <br/>
            </div>
           
            </>
        )
    }
}


export default SortFilter

