const WashRoom = require("../../src/Rooms/WashRoom");
const Adventure = require("../../src/Adventure");

test("This building needs a washroom", () => {
  washRoom = new WashRoom();
  expect(washRoom.getDetailedDescription()).toContain("sink");
});