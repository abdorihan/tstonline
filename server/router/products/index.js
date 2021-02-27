import express from 'express';
import { getData, sellElement } from './data';

const router = express.Router();

// load data
router.get('/', (req, res) => {
    console.log('/');
    getData().then(data => {
        res.send(data);
    });
});
// sell element
router.post('/sell', (req, res) => {
    console.log('/sell');
    sellElement(req.body).then(data => {
        res.send(data);
    });
});

module.exports = router;
