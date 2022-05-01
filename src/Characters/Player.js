class Player {

    #numberOfPockets = 4
    #pockets = new Array()

    pickUp(item) {
        if (this.#pockets.length < this.#numberOfPockets) {
            this.#pockets.push(item)
            return true
        }
        return false
    }

    has(item) {
        return this.#pockets.includes(item)
    }

    throwAway(item) {
        if (this.has(item)) {
            this.#pockets.splice(this.#pockets.indexOf(item), 1)
        }
    }


}

module.exports = Player