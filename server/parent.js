import { Worker } from 'node:worker_threads';
import http from 'node:http';

const worker = new Worker(`./worker.js`);

http.createServer((req, res) => {
    worker.postMessage('calculate');

    worker.on('message', () => {
        res.writeHead(200);
        res.end('hello world\n');
    })
  }).listen(8000);
