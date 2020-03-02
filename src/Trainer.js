class Trainer {

    constructor(name,spots) {
        this.name = name;
        this.reputation = 0;
        this.spots = spots;
        this.clients = [];
    }

    getClients() {
        return this.clients;
    }

}

module.exports = {
    Trainer : Trainer
}
