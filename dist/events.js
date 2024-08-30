"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('hello word');
const events_1 = require("events");
const eventEmiter = new events_1.EventEmitter();
eventEmiter.on('lunch', () => {
    console.log('yum');
});
eventEmiter.emit('lunch');
eventEmiter.emit('lunch');
