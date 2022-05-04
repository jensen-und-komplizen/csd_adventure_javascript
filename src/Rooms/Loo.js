const Console = require("console");

class Loo {

    #items = new Array()
    #player

    constructor(player) {
        this.#player = player
        this.#items.push('a pretty dirty door, with some nasty jokes on it')
        this.#items.push('some toilet paper')
        this.#items.push('a dollar')
        this.#items.push('a few magazines')
    }

    removeItem(item) {
        for(let index = 0; index < this.#items.length; index++) {
            let currentItem = this.#items[index]
            if (currentItem.includes(item)) {
                this.#items.splice(index, 1)
            }
        }
    }

    tell(command) {
        let response = null;
        switch (command) {
            case "look at magazines":
            case "magazines":
            case "magazine":
            case "read magazine":
            case "read magazines":
            case "":
                response = "You see a very much used Micky Mouse magazine, a fairly used Chippendale fanzine, a very old but unusable Playboy and what seems to be a scrum guide 2009 in mint condition."
                break
            case "look at door":
            case "observe door":
            case "door":
                response = "Seems to be the door to the washroom."
                break
            case "look at dollar":
                response = "It's a pretty dollar. Very shiny."
                break
            case "look at toilet paper":
            case "toilet paper":
            case "paper":
                response = "Hmm. Maybe I should use it before leaving this room."
                break
            case "look at playboy":
            case "playboy":
            case "read playboy":
                response = "I'd rather not."
                break;
            case "read nasty joke":
            case "nasty joke":
            case "read joke":
            case "joke":
                response = "What did the toaster say to the sliced bread? I want you inside me!"
                break;
            case "take dollar":
            case "steal dollar":
            case "dollar":
            case "a dollar":
            case "pick up a dollar":
            case "take a dollar":
            case "pick up dollar":
                if (!this.#player.has("dollar") && this.#player.pickUp("dollar")) {
                    this.removeItem("dollar");
                    response = "You picked up the dollar.";
                } else {
                    response = "There is nothing to pick up.";
                }
                break
       }
        return response;
    }

    getDescription() {
        return "You wake up on the loo. You have no idea where or who you are.";
    }

    getDetailedDescription() {
        return "You see " + this.#items.join(', ') + "."
    }
}

module.exports = Loo