import { add } from "./add";

describe("Add", () => {
  it("can test", () => {
    expect(add("foo", "bar")).toEqual("foobar");
  });
});
