import React from 'react';

const Footer = (props) => {
    return(
        <div>
            <center>
                <h3> Edumato&copy; product time:{props.month}{props.year}</h3>
                <p>contact us on
                <a href="https://www.facebook.com/smit.bhatt65/" target="_blank">Facebook</a></p>

            </center>
        </div>
    )
}

export default Footer;