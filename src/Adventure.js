const Loo = require("./Rooms/Loo");
const Help = require("./public/Help");
const Player = require("./Characters/Player");
const WashRoom = require("./Rooms/WashRoom");

class Adventure {
  #loo;
  #washRoom;
  #help;
  #currentRoom;
  lastResponse;
  #counter = 0;
  player;

  start() {
    this.player = new Player();
    this.#loo = new Loo();
    this.#washRoom = new WashRoom();
    this.#help = new Help();
    this.#currentRoom = this.#loo;
    this.lastResponse = this.#currentRoom.getDescription();
    return this.lastResponse;
  }

  tell(command) {
    let response;
    console.log(command);
    switch (command) {
      case 'help':
        response = this.#help.getHelpText()
        break
      case "look around":
        response = this.#currentRoom.getDetailedDescription();
        break;
      case "go to washroom":
        this.#currentRoom = this.#washRoom;
        response = "You enter the washroom.";
        break;
      case "count":
        this.#counter++;
        response = "The counter is at " + this.#counter;
        break;
      case "pick up dollar":
        if (this.player.pickUp("dollar")) {
          this.#loo.removeItem("dollar");
          response = "You picked up the dollar.";
        } else {
          response = "There is nothing to pick up.";
        }
      default:
        response = this.#currentRoom.tell(command);
        if (!response) {
          response = "I don't understand " + command;
        }
        break;
    }
    this.lastResponse = response;
    return response;
  }
}

module.exports = Adventure;
