const express = require('express');
const router = express.Router();
const kidsBooks = require('../models/kidsBooks');

router.get('/kidsBooks',(req,res)=>{
    res.render('kidsBooks/index.ejs', {kidsBooks});
});

module.exports = router;
