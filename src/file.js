import { readFile, readFileSync } from "fs";
import { readFile as readFilePromise } from "fs/promises";

//Blocking
const txt = readFileSync('./hello.txt', 'utf8');
console.log(txt);

// non-blocking
readFile('./hello.txt', 'utf8', (err, txt) => {
    console.log(txt, err)
})

// Promise based, also non-blocking
const txt2 = await readFilePromise('./hello.txt', 'utf8');
console.log(txt2);
