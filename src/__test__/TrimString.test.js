const TrimString = require("../TrimString");

describe("remove punctutation from a string", () => {
  it("remove !", () => {
    const input = "!hello world";
    const expected = " hello world";
    const actual = TrimString(input);

    expect(actual).toBe(expected);
  });
});
