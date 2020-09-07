import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Imagescarousel from './Imagescarousel'
import './RestaurntDetails.css'
import TabContainer from 'react-bootstrap/TabContainer'


const restdetail = "http://localhost:8900/restaurantdetails";
class Restaurent extends Component {
    constructor(props){
        super(props)

        this.state={
            rest:''
        }
    }

    backbutton = (event) => {
       /* let citiId=parseInt(sessionStorage.getItem('citiId'))
        let mealid = parseInt(sessionStorage.getItem('mealid'))
        /*if (mealid)*/
        this.props.history.push(`/`)
        sessionStorage.clear()
        /*else 
        this.props.history.push(`/details/${citiId}`)*/
        
    }
    
    render(){
        console.log(">>>>",this.state.rest)
        var {rest} = this.state
        return(
           
            <div className="container">
                
                <div className="panel panel-danger">
                    <div className="panel-heading">
                        <h2>{rest.name}</h2>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-6">
                             {/*<Carousel src={this.state.rest.thumb} name={this.state.rest.name}/>*/}
                             {/*<Imagescarousel src={rest.thumb}/>*/}
                              <img className="img-responsive" src={rest.thumb}/>
                 
                            </div>
  

                            <div className="col-md-6">
                                <h3>{rest.name}</h3>
                                <h4>{rest.locality}</h4>
                                <h4>{rest.address}</h4>
                                <h4>Rs.{rest.cost}  Per Two</h4>
                                <button type="button"  data-toggle="modal" data-target="#myModal">
    Click for Pictures
  </button>
  <div className="modal fade" id="myModal">
    <div className="modal-dialog">
      <div className="modal-content">
      
        
        <div className="modal-header">
        <h4 class="modal-title">Some of our delicacies!</h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        
        
        <div className="modal-body">
         <Imagescarousel/>
        </div>
                            </div>
                            </div>
    </div>
                            </div>
                        </div> 
                        <br/>
                        <div>
                        <Tabs defaultActiveKey="Contact" id="uncontrolled-tab-example">
                            <TabList>
                                <Tab eventKey="Overview"><span className="overview">Overview</span></Tab>
                                <Tab eventKey="Contact" ><span className="Contact">Contact</span></Tab>
                            </TabList>

                            <TabPanel>
                                <div>
                                    <div className="about">About this Place</div>
                                    <br />
                                    <div className="cuisine">Cuisine</div>
                                    <div className="bakery">Fast Food 🍟</div>
                                    <br />
                                    <div className="cuisine">Average Cost</div>
                                    <div className="bakery">₹{rest.cost} for two people(approx).</div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div>
                                    <div className="phone-number">Phone Number</div>
                                    <div className="pdigit">45456556</div>
                                    <br />
                                    <div className="bheader">{rest.locality}</div>
                                    <div className="address">{rest.address}</div>
                                </div>
                            </TabPanel>
                        </Tabs>
                        </div>
                        <br/><br/>
                        <div className="row">
                            <button class="btn btn-danger btn-lg"
                            onClick={this.backbutton}>Back</button>
                            &nbsp;
                            <Link to={`/order/${this.props.match.params.id}`} class="btn btn-success btn-lg">Place Order</Link>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        let restid = parseInt(this.props.match.params.id)
        axios.get(`${restdetail}/${restid}`)
        .then((response) => {this.setState({rest:response.data[0]})})
    }
}

export default Restaurent;