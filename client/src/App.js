import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './components/container/container';
import Trainers from './components/trainers/trainers'

const SortingHelper = (arr) => {

    // Se la hace una copia a la lista original para que el algoritmo no modifique el estado inicial de esta
    let result = [...arr]; 
    // Mediante este operador ternario calculamos que lista nos pasan(Clientes o Trainers) en dependencia
    // de sus propiedades reputation o importance respectivamente y asi no tenemos que implementar
    // dos metodos de ordenamientos;1 para cada lista, este es generico y sirve para las 2
    const toCompare = (result[0].reputation) ? 'reputation' : 'importance'; 
    // Implementacion manual de un algoritmo de ordenacion 
    for (let i = 0; i < result.length;i++) {
        let temp;
        for (let j = i+1; j < result.length;j++) {
            if (result[i][toCompare] < result[j][toCompare]) {
                temp = result[i];
                result[i] = result[j];
                result[j] = temp;
            }
        }
    }
    // Retorna la lista ordenada de mayor a menor en base a su propiedad(importance o reputaion)
    return result;
}
class App extends Component{

  constructor() {
    super();
    this.state = {
      trainers : [],
      clients : [],
      paired: false
    }
  }

  async componentDidMount() {

    const resp = await fetch('/api');
    const data = await resp.json();
    this.setState({
      trainers : data.trainers,
      clients : data.clients,
    });
 
}

  pairingData() {

    let finalTrainersList = SortingHelper(this.state.trainers);
    let finalClientsList = SortingHelper(this.state.clients);

       for (const client of finalClientsList) {
           for (const trainer of finalTrainersList) {
               if (trainer.spots > 0 ) {
                 client.personalTrainer = trainer.name;
                 trainer.clients.push(client);
                 trainer.spots--;
                 break;
               }
           }
       }
    return finalTrainersList;
  }


  handleClick  = async () =>  {

    if (!this.state.paired) {
        this.setState({
        trainers: this.pairingData(),
        paired : !this.state.paired});
         
    }
    else {
      this.setState({
        trainers: this.state.trainers,
        paired : !this.state.paired
      })
    }
 }
  

  render() {
    const buttonText = !this.state.paired ? 'Pairing' : 'Go Back';
    const trainers = this.state.trainers;
    const clients = this.state.clients;
    const checkParity = this.state.paired;
    const containerTemplate = <Container trainers={trainers} clients = {clients}/>
    
    return (
      <div className="App">
        {
          (!checkParity) ? containerTemplate : <Trainers list={trainers} renderType='childs' />
         
        }
        <button onClick={this.handleClick}>
          {buttonText}
        </button>
      </div>
    );
  }
  
}

export default App;
