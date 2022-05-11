class Player {
    #numberOfPockets = 4
    #pockets = new Array()

    getPocket() {
        return this.#pockets
    }

    pickUp(item) {
        if (this.#pockets.length < this.#numberOfPockets) {
            if (typeof item === 'string') {
                item = {
                    name: item,
                    helpSearch: item.split(' '),
                    helpText: 'This is ' + item
                }
            }
            this.#pockets.push(item)
            return true
        }
        return false
    }

    has(item) {
        let itemFound = false
        this.#pockets.map((pocketItem) => {
            if (pocketItem.name === item) {
                itemFound = true;
            }
        })
        return itemFound
    }

    throwAway(item) {
        if (this.has(item)) {
            this.#pockets.splice(this.#pockets.indexOf(item), 1)
        }
    }
}

module.exports = Player
