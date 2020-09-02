import React,{Component} from 'react';

class Search extends Component {
    constructor(){
        super()
        console.log(">>>>>inside constructor")
        this.state={
            title:'Edureka @ InternShip',
            keyword:'User Text Here',
            location:'',
            city:''
        }
    }
   

    handleChange =(event) => {
        this.setState({keyword:event.target.value?event.target.value:'User Text Here'})
    }

    handleCity = (event) => {
        this.setState({city:event.target.value})
    }

    render(){
        console.log(">>>>>inside render")
        return(
            <header>
                <center>
                    <h1>{this.state.title}</h1>
                    <input type="text" onChange={this.handleChange}/>
                    <p>{this.state.keyword}</p>

                    <select onChange={this.handleCity}>
                        <option value="delhi">Delhi</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="chandigarh">Chandigarh</option>
                    </select>
                    <p>Selected City is {this.state.city}</p>
                </center>
                <hr/>
            </header>
        )
    }

    componentDidMount(){
        console.log(">>>>>inside componentDidMount")
    }
    
}

export default Search;