import React,{Component} from 'react';
import Trainers from '../trainers/trainers';
import Clients from '../clients/clients'

class Container extends Component {

    render() {
        return (
            <div>
                <Trainers list={this.props.trainers} renderType='classic'/>
                <Clients list={this.props.clients}/>
            </div>
        )
    }
}

export default Container;