class Help {
    #help = []
    #player

    constructor(player) {
        this.#player = player
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

    getHelpText(itemList, command, player) {
        const commandList = command.split(' ')
        const allItems = this.getAllItems(itemList)
        this.#player = player

        if(commandList.length > 1) {
            let helpItem = null
            allItems.map((item) => {
                commandList.map((term) => {
                    if (helpItem === null && item.helpSearch.includes(term)) {
                        helpItem = item;
                    }
                })
            })
            if (helpItem === null && this.#player.getPocket().length !== 0) {
                this.#player.getPocket().map((item) => {
                    commandList.map((term) => {
                        if (helpItem === null && item.helpSearch.includes(term)) {
                            helpItem = item;
                        }
                    })
                })
            }
            return helpItem && helpItem.helpText;
        } else {
            let itemListStr = [];
            allItems.map((item) => {
                itemListStr.push(item.name)
            })
            return this.#help.concat('<br> find out which actions can be used for these items: <br>')
              .concat(itemListStr.join(', '))
              .concat('<br> For further information for actions of object please type: help [item].');
        }
    }

    getAllItems(itemList) {
        let allItems = [];
        for (let index = 0; index < itemList.length; index++) {
            let currentItem = itemList[index];
            if (typeof currentItem === 'string') {
                currentItem = {
                    name: currentItem,
                    helpSearch: currentItem.split(' '),
                    helpText: 'Help text: This is ' + currentItem
                }
            }
            allItems.push(currentItem);
        }
        return allItems
    }
}

module.exports = Help
