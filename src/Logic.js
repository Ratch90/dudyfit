const Trainers = require('./Trainer');
const Clients = require('./Client');
const Trainer = Trainers.Trainer;
const Client = Clients.Client;

// Lista inmutable con los Entrenadores simulando una base de datos
const trainersDataBase = [new Trainer('Manolo',1),new Trainer('Paco',4),
                          new Trainer('Javi',3), new Trainer('Mario',2)];
// Lista inmutable con los Clientes simulando una base de datos
const clientsDataBase = [new Client('Ana'),new Client('Pedro'),new Client('Juan'),new Client('Laura'),
                         new Client('Alvaro'), new Client('Homer'),new Client('Trump'),new Client('Bender'),
                         new Client('Morty'), new Client('Rick')];


class Logic {

    
    // Metodos que devuelven las bases de datos originales para rendering de la App en el front
    static getInitialTrainers() {
        trainersDataBase.forEach(trainer => {
            trainer.reputation = (Math.random() * Math.floor(5)).toFixed(2);
        });
        return trainersDataBase;
    }

    static getInitialClients() {
        clientsDataBase.forEach(client => {
            client.importance = (Math.random() * Math.floor(10)).toFixed(2);
        })
        return clientsDataBase;
    }
    
}

module.exports = {
    Logic : Logic
}

