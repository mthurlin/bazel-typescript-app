import React from "react";
import { Footer } from "./footer";
import { doubleString64 } from "../../myframework/doublestring/doublestring";
import { myLibFunc } from "myjslib/mylib";

export function Home() {
  return (
    <div>
      Home {doubleString64("sweet")} {myLibFunc("home")}
      <br />
      <Footer />
    </div>
  );
}
