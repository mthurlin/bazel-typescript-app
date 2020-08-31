import * as React from "react";
import { MainContext } from "./context";
import { Home } from "../home/home";

export function Main() {
  return (
    <MainContext.Provider value={"Hello from Main"}>
      <Home />
    </MainContext.Provider>
  );
}
