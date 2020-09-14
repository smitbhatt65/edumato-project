import React,{Component} from 'react';
import axios from 'axios';
import OrderView from './orderView';
import {Link} from 'react-router-dom'

const orderdetail = "http://localhost:8900/allOrder";

class OrderDisplay extends Component{
    constructor(){
        super()

        this.state={
            orders:''
        }
    }

 returntohome=()=>{
    sessionStorage.clear();
    
}

    render(){
        return(
            <div>
            <div className="container" >
                <div>
                    <OrderView orderdata={this.state.orders}/> 
                    <Link to={`/`}>
                    <div >
                   <center> <button className="btn btn-default" onClick={this.returntohome}>Return to Homepage</button></center>
                   </div>
                   </Link>
                   </div>
            </div>
        </div>
        )
    }

    componentDidMount(){
        axios.get(`${orderdetail}`)
        .then((response) => {this.setState({orders:response.data})})
    }
}


export default OrderDisplay;