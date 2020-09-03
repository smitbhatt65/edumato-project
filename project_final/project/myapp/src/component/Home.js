import React from 'react';
import Search from './Search';
import Footer from './Footer';
import QuickSearch from './QuickSearch';
import './Home.css';

//functional Component
const Home = (props) => {

    const handleRestaurant = (data) => {
        props.history.push(`/rest/${data}`)
    }

    return(
        <div className="homepage">
            <div className="imagecontainer">
            <Search restid={(data) => {handleRestaurant(data)}}/>
            </div>
            <QuickSearch/>
            <hr/>
            <Footer year="2020" month="july"/>
        </div>
    )
}

export default Home;
