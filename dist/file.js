"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const promises_1 = require("fs/promises");
//Blocking
const txt = (0, fs_1.readFileSync)('./hello.txt', 'utf8');
console.log(txt);
// non-blocking
(0, fs_1.readFile)('./hello.txt', 'utf8', (err, txt) => {
    console.log(txt, err);
});
// Promise based, also non-blocking
const txt2 = await (0, promises_1.readFile)('./hello.txt', 'utf8');
console.log(txt2);
