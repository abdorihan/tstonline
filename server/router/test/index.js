import express from 'express';
import { getData } from './data';

const router = express.Router();

// load data
router.get('/', (req, res) => {
    console.log('test');
    getData().then(data => {
        res.send(data);
    });
});

module.exports = router;
