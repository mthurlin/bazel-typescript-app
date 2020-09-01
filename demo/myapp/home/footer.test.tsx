import "../test-setup";
import React from "react";
import { render } from "@testing-library/react";
import { Footer } from "./footer";

describe("Footer", () => {
  it("can render", () => {
    const { getByText } = render(<Footer />);
    expect(getByText("Footer")).toBeDefined();
  });
});
