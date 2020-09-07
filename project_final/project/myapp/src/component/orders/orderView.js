import React from 'react';
import './orderView.css'
const OrderView = (props) => {
    console.log(props)

    const renderTable = ({orderdata}) => {
        if(orderdata){
            return orderdata.map((item) => {
                return(
                    <tr>
                        <td>{item._id}</td>
                        <td>{item.rest_id}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>{item.address}</td>
                        <td>{item.person}</td>
                    </tr>
                )
            })
        }
    }
    return(
        <div className="container">
            <center><h3>Order List</h3></center>
            <table className="table table-responsive table-hover" >
                <thead>
                    <tr>
                        <th><h1>order_id</h1></th>
                        <th><h1>rest_id</h1></th>
                        <th><h1>name</h1></th>
                        <th><h1>phone</h1></th>
                        <th><h1>email</h1></th>
                        <th><h1>address</h1></th>
                        <th><h1>person</h1></th>
                    </tr>
                </thead>
                <tbody>
                {renderTable(props)}
                </tbody>
                
            </table>
        </div>
    )
}

export default OrderView;