import React, {Component} from 'react'
import './trainer.css'

class Trainers extends Component {

    render() {
        
        const listOfTrainers = this.props.list;
        const renderType = this.props.renderType;
        const renderTo = (renderType === 'classic') ? 'classic' : 'childs';

        const classicRender = listOfTrainers.map((trainer,index) => {
            return <li key={index}>Name: {trainer.name} Reputation : {trainer.reputation} Spots : {trainer.spots}</li>
        })

        const clientsRender = listOfTrainers.map((trainer) => {
            return (
                <div>
                    <h2>{trainer.name}, reputation : {trainer.reputation}</h2>
                    <h4>His/Her clients are: </h4>
                    <ul>
                       {
                         trainer.clients.map((client,index) => {
                             return <li key={index}>{client.name} {client.importance}</li>
                         })
                       } 
                    </ul>
                </div>
            )
        })


        return (
            <div>
                <h2>Trainers</h2>
                <ul>
                  {
                    renderTo === 'classic' ? classicRender : clientsRender
                  }
                   
                </ul>
            </div>
        )
    }
}

export default Trainers;