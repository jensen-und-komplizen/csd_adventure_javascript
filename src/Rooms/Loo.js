const Console = require("console");

class Loo {

    #items = new Array()

    constructor() {
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
            case "look at playboy":
                response = "I'd rather not."
                break;
            case "read nasty joke":
                response = "What did the toaster say to the sliced bread? I want you inside me!"
                break;
x       }
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