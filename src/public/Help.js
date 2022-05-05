class Help {
    #help = []

    constructor() {
        this.#help.push('Help! <br>')
        this.#help.push('You can use the following commands. <br>')
        this.#help.push('Commands: <br>')
        this.#help.push('- look around <br>')
        this.#help.push('- count<br>')
        this.#help.push('Extended commands:')
        this.#help.push('Replace [item] with an item you see or possess: <br>')
        this.#help.push('- read [item]<br>')
        this.#help.push('- look at [item]<br>')
        this.#help.push('- pick up [item]<br>')
        this.#help.push('Replace [room] with an room name you like to enter: <br>')
        this.#help.push('- go to  [item]<br>')
    }

    getHelpText(itemList) {
        let allItems = [];
        for (let index = 0; index<itemList.length; index++) {
            let currentItem = itemList[index];
            if (typeof currentItem === 'string') {
                allItems.push(currentItem);
            } else if (typeof currentItem === 'object') {
                allItems.push(currentItem.name);
            }
        }
        return this.#help.concat('<br> find out which actions can be used for these items: <br>')
          .concat(allItems.join(', '))
          .concat('<br> For further information for actions of object please type: help [item].');

    }
}

module.exports = Help
