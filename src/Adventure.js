const Loo = require("./Rooms/Loo");

class Adventure {
    #loo;
    #currentRoom;
    lastResponse;

    constructor() {
        this.#loo = new Loo()
        this.#currentRoom = this.#loo
        this.lastResponse = this.#currentRoom.getDescription()
    }

    tell(command) {
        let response;
        console.log(command);

        switch (command) {
            case 'look around':
                response = this.#currentRoom.getDetailedDescription()
                break;
            default:
                response = "I don't understand " + command
                break;
        }
        this.lastResponse = response;
        return response;
    }

}

module.exports = Adventure