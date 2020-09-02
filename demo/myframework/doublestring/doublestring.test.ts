import { doubleString } from "./doublestring";

describe("Add", () => {
  it("can test", () => {
    expect(doubleString("foo")).toEqual("foofoo");
  });
});
