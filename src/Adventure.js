const Loo = require("./Rooms/Loo");

class Adventure {
    #loo;
    #currentRoom;
    lastResponse;

    start() {
        this.#loo = new Loo()
        this.#currentRoom = this.#loo
        this.lastResponse = this.#currentRoom.getDescription()
        return this.lastResponse;
    }

    tell(command) {
        let response;
        console.log(command);

        switch (command) {
            case 'look around':
                response = this.#currentRoom.getDetailedDescription()
                break
            case "look at magazines":
                response = "You see a very much used Micky Mouse magazine, a fairly used Chippendale fanzine, a very old but unusable Playboy and what seems to be a scrum guide 2009 in mint condition."
                break
            case "look at door":
                response = "Seems to be the door to the washroom."
                break
            case "look at coin":
                response = "It's a pretty coin. Very shiny. But it is stuck."
                break
            case "look at toilet paper":
                response = "Hmm. Maybe I should use it before leaving this room."
                break
            default:
                response = "I don't understand " + command
                break
        }
        this.lastResponse = response;
        return response;
    }

}

module.exports = Adventure