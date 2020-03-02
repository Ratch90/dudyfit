import React, {Component} from 'react'
import './client.css'

class Clients extends Component {

     
    render() {
       
        return (
            <div>
                <h2>Clients</h2>
                <ul>
                   {this.props.list.map((client,index) => {
                       return <li key={index}>Name: {client.name} Importance: {client.importance}</li>
                   })} 
                </ul>
            </div>
        )
    }
}

export default Clients;