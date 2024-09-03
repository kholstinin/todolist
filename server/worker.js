import { parentPort } from 'node:worker_threads';

parentPort.on('message', (message) => {
    parentPort.postMessage(message);
});
