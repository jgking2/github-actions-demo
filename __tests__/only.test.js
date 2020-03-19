const { determineMyFortune } = require("../src/eightball");

describe("Everything?", () => {
  it("works?", () => {
    const fortune = determineMyFortune(
      "When is The Office returning for a reunion?"
    );
    // expect(fortune).toBe('You may rely on it.')
    expect(fortune).toBeDefined();
  });
});
