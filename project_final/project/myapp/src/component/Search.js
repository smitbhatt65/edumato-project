import React,{Component} from 'react';

const locurl = "http://localhost:8900/location";
const resturl = "http://localhost:8900/restauranthome?city=";

class Search extends Component {
    constructor(props){
        super(props)
        this.state={
            location:'',
            city:'',
            restaurants:''
        }
    }

    handleCity = (event) => {
        this.setState({restaurants:''})
        this.setState({city:event.target.value})
        var cityid = parseInt(event.target.value)
        sessionStorage.setItem('citiId',event.target.value)
        fetch(`${resturl}${cityid}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({restaurants:data})
        })
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.city}>
                        {item.name}
                    </option>
                )
            })
        }
    }

    renderRest = (data) => {
        if(data){
            
            return data.map((item) => {
                return(
                    <option value={item._id}>
                         {item.name} | {item.locality}
                    </option>
                )
            })
        }
    }

    handleRestaurant =(event) => {
        console.log(event.target.value)
        this.props.restid(Number(event.target.value))
    }

    render(){
        return(
            <div align>
                <center>
                    <select onChange={this.handleCity} style={{width:"180px",height:"40px"}} >
                    <option value={0}>select locality</option>
                       {this.renderCity(this.state.location)}
                    </select>
                    
                    <select id="restaurant" onChange={this.handleRestaurant} style={{width:"180px",height:"40px"}}>
                    <option value={0}>select restaurant</option>
                        {this.renderRest(this.state.restaurants)}
                    </select>
                </center>
                <hr/>
                </div>
        )
    }

    componentDidMount(){
       fetch(locurl,{method:'GET'})
       .then((res) => res.json())
       .then((data) => {
          
           this.setState({location:data})
       })
    }
    
}

export default Search;

