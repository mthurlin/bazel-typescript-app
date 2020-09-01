import React from "react";
import {JSDOM} from 'jsdom';

// Hack
(React as any).default = React;

const dom = new JSDOM('<html><body></body></html>');
const global: any = Function("return this")();
global.document = dom.window.document;
global.window = dom.window;
global.navigator = dom.window.navigator;
