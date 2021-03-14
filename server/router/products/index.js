import express from 'express';
import { getData, sellElement, sells, deleteElement } from './data';

const router = express.Router();

// load data
router.get('/', (req, res) => {
    getData().then(data => {
        res.send(data);
    });
});
// sell element
router.post('/sell', (req, res) => {
    sellElement(req.body).then(data => {
        res.send(data);
    });
});

// delete element
router.delete('/sell', (req, res) => {
    deleteElement(req.body).then(data => {
        res.send(data);
    });
});

// get sells
router.post('/getsells', (req, res) => {
    sells(req.body).then(data => {
        res.send(data);
    });
});

module.exports = router;
