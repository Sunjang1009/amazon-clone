const express = require('express');
const router = express.Router();
const vitamins = require('../models/vitamins');

router.get('/vitamins',(req,res)=>{
    res.render('vitamins/index.ejs', {vitamins});
});

module.exports = router;
