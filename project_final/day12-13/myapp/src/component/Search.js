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

    handleRestaurent =(event) => {
        console.log(event.target.value)
        this.props.restid(Number(event.target.value))
    }

    render(){
        return(
            <header>
                <center>
                    <select onChange={this.handleCity}>
                       {this.renderCity(this.state.location)}
                    </select>
                    {/*<input list="restaurent" name="rests" id="rests"/>*/}
                    <select id="restaurent" onChange={this.handleRestaurent}>
                        {this.renderRest(this.state.restaurants)}
                    </select>
                </center>
                <hr/>
            </header>
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

/*
 {item.name} | {item.locality}
*/