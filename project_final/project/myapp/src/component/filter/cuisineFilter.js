import React, {Component} from 'react';
import axios from 'axios';

const restdetail = "http://localhost:8900/restaurantlist";
class CusineFilter extends Component {

    cuisineFilter = (event) => {
        //sessionStorage.setItem('mealid',this.props.match.params.id)
        let mealid = parseInt(this.props.mealIdNumber)
        let citiid = parseInt(this.props.citiIdNo)
        let cuisine = Number(event.target.value)
        let url;
        if(event.target.value === ""){
            url = `${restdetail}/${citiid}/${mealid}`
        }else{
            url = `${restdetail}/${citiid}/${mealid}?cuisine=${cuisine}`
        }
        axios.get(url)
        .then((response) => {this.props.restpercuisine(response.data)})
    }

    render(){
        return(
            <React.Fragment>
               <center>Cuisine</center>
                        <hr/>
                        <div onChange={this.cuisineFilter}>
                       
                        <input id="All" type="radio" value="" name="cuisine"/>
                                <label className="radio" for="All">
                                All
                            </label>
                            <input type="radio" value="1" name="cuisine" id="North"/>
                            <label for="North" className="radio">
                                North
                            </label>
                            <input type="radio" value="2" name="cuisine" id="South"/>
                            <label  className="radio" for="South">
                               South
                            </label>
                            <input type="radio" value="3" name="cuisine" id="Chinese"/>
                            <label  className="radio" for="Chinese">
                                Chinese   
                            </label>
                            <input type="radio" value="4" name="cuisine"  id="Fast Food"/>
                            <label className="radio" for="Fast Food">
                               Fast Food 
                            </label>
                            <input type="radio" value="5" name="cuisine" id="Street Food"/>
                            <label className="radio" for="Street Food">
                               Street Food
                            </label> 
                            <br/>
                        </div>
            </React.Fragment>
        )               
    }
}


export default CusineFilter