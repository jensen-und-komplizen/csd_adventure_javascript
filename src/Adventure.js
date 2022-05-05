const Loo = require('./Rooms/Loo')
const Help = require('./public/Help')
const Player = require('./Characters/Player')
const WashRoom = require('./Rooms/WashRoom')

class Adventure {
    #loo
    #washRoom
    #help
    #currentRoom
    lastResponse
    #counter = 0
    player

    start() {
        this.player = new Player()
        this.#loo = new Loo(this.player)
        this.#washRoom = new WashRoom()
        this.#help = new Help()
        this.#currentRoom = this.#loo
        this.lastResponse = this.#currentRoom.getDescription()
        return this.lastResponse
    }

    tell(command) {
        let response
        let originalCommand = command
        console.log(command)
        command = command.toLowerCase()

        switch (command) {
            case 'help':
            case '':
                response = this.#help.getHelpText()
                break
            case 'observe':
            case 'scout':
            case 'scout around':
            case 'look':
            case 'look around':
                response = this.#currentRoom.getDetailedDescription()
                break
            case 'washroom':
            case 'enter the washroom':
            case 'go to the washroom':
            case 'go to washroom':
            case 'go through door':
            case 'enter door':
            case 'enter the door':
            case 'door':
            case 'go washroom':
            case 'move to washroom':
            case 'enter washroom':
                this.#currentRoom = this.#washRoom
                response = 'You enter the washroom.'
                break
            case 'count':
                this.#counter++
                response = 'The counter is at ' + this.#counter
                break
            default:
                response = this.#currentRoom.tell(command)
                if (!response) {
                    response =
                        "I don't understand " +
                        originalCommand +
                        ", you can try 'help' for some support!"
                }
                break
        }
        this.lastResponse = response
        return response
    }

    getCurrentRoom() {
        return this.#currentRoom
    }
}

module.exports = Adventure
