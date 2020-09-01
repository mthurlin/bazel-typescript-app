import React from "react";
import ReactDOM from "react-dom";
import { Main } from "../myapp/main/main";

// Hack
(React as any).default = React;

const div = document.createElement("div");
document.body.appendChild(div);
ReactDOM.render(<Main />, div);
