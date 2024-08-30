console.log('hello word');

import {EventEmitter} from 'events';

const eventEmiter = new EventEmitter();

eventEmiter.on('lunch', () => {
    console.log('yum');
});

eventEmiter.emit('lunch');
eventEmiter.emit('lunch');
