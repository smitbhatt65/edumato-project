import React from 'react';
import Search from './Search';
import Footer from './Footer';
import QuickSearch from './QuickSearch';


//functional Component
const Home = (props) => {

    const handleRestaurant = (data) => {
        props.history.push(`/rest/${data}`)
    }

    return(
        <div>
            <Search restid={(data) => {handleRestaurant(data)}}/>
            <QuickSearch/>
            <hr/>
            <Footer year="2020" month="july"/>
        </div>
    )
}

export default Home;
