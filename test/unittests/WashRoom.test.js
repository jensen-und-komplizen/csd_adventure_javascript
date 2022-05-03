const WashRoom = require("../../src/Rooms/WashRoom");

test("This building needs a wash room", () => {
  washRoom = new WashRoom();
  expect(washRoom.getDetailedDescription()).toContain("wash");
});
