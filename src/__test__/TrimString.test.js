const TrimString = require("../TrimString");

// describe("filter punctuation tests", () => {
//   const testCases = [
//     {
//       input: "hello world",
//       output: "hello world",
//     },
//     {
//       input: "hello%world",
//       output: "hello world",
//     },
//     {
//       input: "!hello world",
//       output: " hello world",
//     },
//     {
//       input: ";hello?world!",
//       output: " hello world ",
//     },
//     {
//       input: "hello;world",
//       output: "hello world",
//     },
//     {
//       input: "hello world?",
//       output: "hello world ",
//     },
//   ];

//   testCases.map((tc) => {
//     it(`returns ${tc.output} when ${tc.input}`, () => {
//       const actual = TrimString(tc.input);
//       expect(actual).toStrictEqual(tc.output);
//     });
//   });
// });
describe("remove punctutation from a string", () => {
  it("remove !", () => {
    const input = "!hello world";
    const expected = " hello world";
    const actual = TrimString(input);

    expect(actual).toBe(expected);
  });
});
