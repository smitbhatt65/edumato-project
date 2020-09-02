import React, {Component} from 'react';
import QuickSearchDisplay from './QuickSearchDisplay';

const quickUrl = "http://localhost:8900/mealtype"

class QuickSearch extends Component {
    constructor(){
        super()

        this.state={
            mealType:''
        }
    }
    render(){
        return(
           <div>
               <QuickSearchDisplay mealData={this.state.mealType}/>
           </div>
        )
    }

    componentDidMount(){
        fetch(quickUrl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({mealType:data})
        })
    }
}

export default QuickSearch;