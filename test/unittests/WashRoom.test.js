const WashRoom = require("../../src/Rooms/WashRoom");

test("This building needs a washroom", () => {
  washRoom = new WashRoom();
  expect(washRoom.getDetailedDescription()).toContain("sink");
});
