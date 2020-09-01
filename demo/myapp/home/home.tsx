import React from "react";
import { Footer } from "./footer";
import { doubleString64 } from "../../myframework/doublestring/doublestring";

export function Home() {
  return (
    <div>
      Home {doubleString64("sweet")} home
      <br />
      <Footer />
    </div>
  );
}
