const express = require('express');
// const res = require('express/lib/response');
const path = require('path');
// const axios = require('axios');
const { nextTick } = require('process');
const port = 8000;

const router = express();

router.set('view engine', 'ejs');
router.set('views', path.join(__dirname,'views'));
router.use(express.urlencoded());
router.use(express.static('assets'));

router.get('/', (req,res) => {
    res.render('home');
})

router.listen(port, err => {
    if(err) {
        console.log("Server can't run");
        return;
    }
    console.log("Server is up and running on port", port);
})