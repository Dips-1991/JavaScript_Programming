
"use strict";

require("prompt-sync")

const prompt = ps({ sigint: true});

let value = prompt("Enter the value: ");

console.log(value);