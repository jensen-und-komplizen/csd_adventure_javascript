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

    getDescription() {
        return "You wake up on the loo. You have no idea where or who you are.";
    }

    getDetailedDescription() {
        return "You see " + this.#items.join(', ') + "."
    }
}

module.exports = Loo