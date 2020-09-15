import React,{Component} from 'react';
import axios from 'axios';
import DetailDisplay from './DetailsDisplay';
import CostFilter from '../filter/costFilter';
import CusineFilter from '../filter/cuisineFilter';
import SortFilter from '../filter/sortFilter';
//import Pagination from "react-js-pagination";

import './Details.css';

const restdetail = "http://localhost:8900/restaurantlist";

class Details extends Component {
    constructor(props){
        super(props)

        this.state={
            citiId: parseInt(sessionStorage.getItem('citiId'))? parseInt(sessionStorage.getItem('citiId')):1,
            restlist:[],
            //activePage:''
        }
    }

    setDataPerCuisine(sortedData){
        this.setState({restlist:sortedData})
    }

    setDataPerCost(sortedData){
        this.setState({restlist:sortedData})
    }

    setDataPerSort(sortedData){
        this.setState({restlist:sortedData})
    }

   // handlePageChange(pageNumber) {
      //  console.log(`active page is ${pageNumber}`);
       // this.setState({activePage: pageNumber});
        //let mealid = parseInt(this.props.match.params.id)
        //axios.get(`${restdetail}/${this.state.citiId}/${mealid}/${pageNumber}`)
        //.then((response) => {this.setState({restlist:response.data})})
     // }
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <CusineFilter mealIdNumber={this.props.match.params.id} citiIdNo={this.state.citiId} restpercuisine={(data) => {this.setDataPerCuisine(data)}}/>
                        <CostFilter restpercost={(data) => {this.setDataPerCost(data)}} mealIdNumber={this.props.match.params.id} citiIdNo={this.state.citiId}/>
                        <SortFilter mealIdNumber={this.props.match.params.id} citiIdNo={this.state.citiId}  restpersort={(data)=>{this.setDataPerSort(data)}}/>
                        </div>
                    <div className="col-md-10">
                        <DetailDisplay restdata={this.state.restlist}/> 

                       
                    </div>
                   {/* <div>
                        <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={2}
                        totalItemsCount={450}
                        pageRangeDisplayed={5}
                        onChange={this.handlePageChange.bind(this)}
                        />
                   </div>*/}
                </div>
            </div>
        )
    }

    componentDidMount(){
        //let pageNumber=1;
       sessionStorage.setItem('mealId',this.props.match.params.id);
        let mealid = parseInt(this.props.match.params.id)
        axios.get(`${restdetail}/${this.state.citiId}/${mealid}`)
        .then((response) => {this.setState({restlist:response.data})})
    }
}


export default Details;