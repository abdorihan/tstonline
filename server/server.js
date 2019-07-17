import compression from 'compression';
import express from 'express';
import http from 'http';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

// routes
import test from './router/test';

const PORT = 80;

const app = express()
    .use(compression())
    .use(cookieParser())
    .use(morgan('tiny'))
    .use(bodyParser.json());

// REST API
app.use('/test', test);

const server = http.createServer(app);
server.listen(PORT);

console.log(`Server started at http://localhost:${PORT}`);
