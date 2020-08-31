import * as React from "react";
import * as ReactDOM from "react-dom";
import { Main } from "../myapp/main/main";
console.log("Rendering....");
const div = document.createElement("div");
document.body.appendChild(div);
ReactDOM.render(<Main />, div);
