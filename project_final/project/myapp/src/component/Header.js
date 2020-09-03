import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css'
const Header = () => {
    return(
        <div>
            <nav className="navbar navbar-inverse navbar-expand-md navbar-light bg-danger" > 
    <div className="container-fluid">
        <div className="navbar-header"> <Link to={`/`}>
                  <a id="logo">e!</a></Link>
                  <button type="button" className="navbar-toggle"  data-toggle="collapse" data-target="#togglecomponent">
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </button>
        </div>
          <div className="collapse navbar-collapse" id="togglecomponent">
          
                <ul className="nav navbar-nav navbar-right" >
                
                <li className="nav-item"><a className="nav-link"  href="#" id="l">Login</a></li>
                <li className="nav-item"><a className="nav-link" href="#" id="l"><button className="btn">Create an account</button> </a></li>
            
                </ul>
          </div>
    </div>
    
    </nav>
        </div>
    )
}

export default Header