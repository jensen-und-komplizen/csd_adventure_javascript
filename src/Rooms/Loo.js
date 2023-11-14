const Console = require('console')

class Loo {
    #items = new Array()
    #player
	#jokes = [
        'What did the toaster say to the sliced bread? I want you inside me!',
        `Chuck Noris doesn't ask ChatGPT, ChatGPT asks Chuck Noris`,
        'They say that during sex you burn off as many calories as running eight miles. Who the hell runs eight miles in 30 seconds?',
        'I will admit it, I have a tremendous sex drive. My girlfriend lives forty miles away.',
        'How do you call a collection of dad jokes? a DADabase',
        'I bet you can not tell me something that will make me both happy and sad at the same time, a husband says to his wife. She thinks about it for a moment and then responds, Your penis is bigger than your brothers.',
        'How do you make a pool table laugh? Tickle its **beep**.',
    ]

    constructor(player) {
        this.#player = player
        this.#items.push('a pretty dirty door, with some nasty jokes on it')
        this.#items.push('some toilet paper')
        this.#items.push('a dollar')
        this.#items.push({
            id: 'euro001',
            name: 'an euro',
            type: 'item',
            helpSearch: ['euro'],
            helpText: 'It is a one euro coin.<br>You can do: <br>"look at [item] <br>"take [item]"',
        })
        this.#items.push('a few magazines')
    }

    removeItem(item) {
        for(let index = 0; index < this.#items.length; index++) {
            let currentItem = this.#items[index];
            if(typeof currentItem === 'string') {
                if (currentItem.includes(item)) {
                    this.#items.splice(index, 1)
                }
            } else if(typeof currentItem === 'object') {
                if (currentItem.id === item) {
                    this.#items.splice(index, 1)
                }
            }
        }
    }

    tell(command) {
        let response = null
        switch (command) {
            case 'look at magazines':
            case 'magazines':
            case 'magazine':
            case 'read magazine':
            case 'read magazines':
            case '':
                response =
                    'You see a very much used Micky Mouse magazine, a fairly used Chippendale fanzine, a very old but unusable Playboy and what seems to be a scrum guide 2009 in mint condition.'
                break
            case 'look at door':
            case 'observe door':
            case 'door':
                response = 'Seems to be the door to the washroom.'
                break
            case 'look at dollar':
                response = "It's a pretty dollar. Very shiny."
                break
            case 'look at toilet paper':
            case 'toilet paper':
            case 'paper':
                response =
                    'Hmm. Maybe I should use it before leaving this room.'
                break
            case 'look at playboy':
            case 'playboy':
            case 'read playboy':
                response = "I'd rather not."
                break;
            case 'read nasty joke':
            case 'read nasty jokes':
            case 'nasty joke':
            case 'nasty jokes':
            case 'read joke':
            case 'read jokes':
            case 'joke':
            case 'jokes':
                response = this.getRandomNastyJoke();
                break;
            case 'take dollar':
            case 'steal dollar':
            case 'dollar':
            case 'a dollar':
            case 'pick up a dollar':
            case 'take a dollar':
            case 'pick up dollar':
                this.#items.map((item) => {
                    if(item === "a dollar") {
                        this.#player.pickUp('dollar')
                        this.removeItem('dollar')
                        response = 'You picked up the dollar.'
                    }
                })
                if(response === null) {
                    response = "There is no dollar to pick up.";
                }
                break
            case "take euro":
            case "steal euro":
            case "euro":
            case "a euro":
            case "pick up a euro":
            case "take a euro":
            case "pick up euro":
                this.#items.map((item) => {
                    if(item.id === "euro001") {
                        this.#player.pickUp(item)
                        this.removeItem("euro001")
                        response = "You picked up the euro.";
                    }
                })
                if(response === null) {
                    response = "There is no euro to pick up.";
                }
                break
        }
        return response
    }

    getItems() {
        return this.#items;
    }

    getDescription() {
        return 'You wake up on the loo. You have no idea where or who you are.'
    }

    getDetailedDescription() {
        let allItems = [];
        for(let index = 0; index < this.#items.length; index++) {
            let currentItem = this.#items[index];
            if(typeof currentItem === 'string') {
                allItems.push(currentItem);
            } else if(typeof currentItem === 'object') {
                allItems.push(currentItem.name);
            }
        }
        return "You see " + allItems.join(', ') + "."
    }

	getRandomNastyJoke() {
		let response = "You've read every joke.";
        if (this.#jokes.length > 0) {
            const idx = Math.floor(Math.random() * this.#jokes.length);
            response = this.#jokes[idx];

            // remove joke from array so each joke is only told once
            this.#jokes.splice(idx, 1);
        }
        return response;
	}
}

module.exports = Loo
