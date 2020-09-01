import "../test-setup";
import React from "react";
import { render } from "@testing-library/react";
import { Main } from "./main";

describe("Main", () => {
  it("can render", () => {
    const { baseElement } = render(<Main />);
    const divs = baseElement.querySelectorAll("div");
    const div = Array.from(divs).find((d) => d.innerHTML?.indexOf("Home") > -1);
    expect(div).toBeDefined();
  });
});
