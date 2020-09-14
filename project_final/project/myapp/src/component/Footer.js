import React from 'react';

const Footer = (props) => {
    return(
        <div>
            <center>
                <h3> Edumato&copy; product Launch:{props.month}{props.year}</h3>
                <h4>contact us on
                <a href="https://www.facebook.com/smit.bhatt65/" rel="noopener noreferrer" target="_blank"><h1><i class="fa fa-facebook-square" ></i></h1></a>
                <a href="https://www.instagram.com/smitbhatt65/"  rel="noopener noreferrer"target="_blank"><h1><i class="fa fa-instagram" ></i></h1></a></h4>
            </center>
        </div>
    )
}

export default Footer;