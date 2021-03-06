import compression from 'compression';
import express from 'express';
import http from 'http';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

// routes
import test from './router/test';
import products from './router/products';

const app = express()
    .use(compression())
    .use(cookieParser())
    .use(morgan('tiny'))
    .use(bodyParser.json());

// REST API
app.use('/', products);
app.use('/products', products);

const server = http.createServer(app);
server.listen(process.env.PORT || 4000);

console.log(`Server started at`);
