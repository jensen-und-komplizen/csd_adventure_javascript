class Help {

  #help = []

  constructor() {
    this.#help.push('Help! <br>')
    this.#help.push('You can use the following commands. <br>')
    this.#help.push('Commands: <br>')
    this.#help.push('- look around <br>')
    this.#help.push('Extended commands:')
    this.#help.push('Replace [item] with an item you see or possess: <br>')
    this.#help.push('- read [item]<br>')
    this.#help.push('- look at [item]<br>')
    this.#help.push('- pick up [item]<br>')
    this.#help.push('- count<br>')
  }

  getHelpText() {
    return this.#help;
  }
}

module.exports = Help