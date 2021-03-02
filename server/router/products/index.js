import express from 'express';
import { getData, sellElement, sells } from './data';

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
});// get sells
router.get('/sell/:date', (req, res) => {
    sells(req.params.date).then(data => {
        res.send(data);
    });
});

module.exports = router;
