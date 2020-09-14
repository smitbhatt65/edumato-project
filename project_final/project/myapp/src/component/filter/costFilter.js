import React, {Component} from 'react';
import axios from 'axios';

const restdetail = "http://localhost:8900/restaurantlist";
class CostFilter extends Component {
    
    costFilter = (event) => {
        let mealid = parseInt(this.props.mealIdNumber)
        let cost = (event.target.value).split(',');
        let citiid = parseInt(this.props.citiIdNo)
        let lcost = Number(cost[0]);
        let hcost = Number(cost[1]);
        let url;
        if(event.target.value===""){
            url = `${restdetail}/${citiid}/${mealid}`
        }else{
            url = `${restdetail}/${citiid}/${mealid}?hcost=${hcost}&lcost=${lcost}`
        }
        axios.get(url)
        .then((response) => {this.props.restpercost(response.data)})
    }

    render(){
        return(
            <React.Fragment>
                <center><strong>Cost Filter</strong></center>
                <hr/>
                <div onChange={this.costFilter}>
                <input type="radio" value="" name="range" id="All"/>
                        <label  className="radio" for="All">
                                All
                            </label>
                            <input type="radio" value="0,500" name="range" id="0-500"/>
                            <label className="radio" for="0-500">
                                0-500
                            </label>
                            <input type="radio" value="501,1000" name="range" id="500-1000"/>
                            <label className="radio" for="501-1000">
                                500-1000
                            </label> 
                </div>
            </React.Fragment>
        )               
    }
}


export default CostFilter