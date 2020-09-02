import React from 'react';
import {Link} from 'react-router-dom';
import './QuickSearchDisplay.css';

const DisplaySearch = (props) => {

    const listMeal = ({mealData}) => {
        if(mealData){
            return mealData.map((item) => {
                return(
                        <Link to={`/details/${item.mealtype}`}>
                            <div className="tileContainer">
                                <div className="tileComponent1">
                                    <img src={`/images/${item.name}.jpg`} />
                                </div>
                                <div className="tileComponent2">
                                    <div className="componentHeading">
                                        {item.name}
                                    </div>
                                    <div className="componentSubHeading">
                                        Have  exclusive {item.name} options
                                    </div>
                                </div>

                            </div>
                        </Link>
                )
            })
        }
    }

    return(
        <div>
            <div className="quickSearchContainer">
                <p className="quickSearchHeading">
                    Quick Searches
                </p>
                <p className="quickSearchSubHeading">
                    Tired of Searching for a restaurant? Select a mealtype instead!!
                </p>
                {listMeal(props)}
            </div> 
        </div>
    )
}

export default DisplaySearch;