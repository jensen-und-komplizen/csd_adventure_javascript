const Console = require("console");

class WashRoom {
  #items = new Array();

  constructor() {
    this.#items.push("sink");
    this.#items.push("paper towels");
    this.#items.push("mirror");
    this.#items.push("basket");
  }

  removeItem(item) {
    for (let index = 0; index < this.#items.length; index++) {
      let currentItem = this.#items[index];
      if (currentItem.includes(item)) {
        this.#items.splice(index, 1);
      }
    }
  }

  getItems() {
    return this.#items;
  }

  getDescription() {
    return "You are in the washroom, the water in the sink is running!!!";
  }

  getDetailedDescription() {
    return "You see " + this.#items.join(", ") + ".";
  }
}

module.exports = WashRoom;
