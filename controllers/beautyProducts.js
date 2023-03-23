const express = require('express');
const router = express.Router();
const beautyProducts = require('../models/BeautyProducts');

router.get('/beautyProducts',(req,res)=>{
    res.render('beautyProducts/index.ejs', {beautyProducts});
});

router.get('/beautyProducts/:id',(req,res)=>{
    const beautyProduct = beautyProducts[req.params.id];
    res.render('beautyProducts/show.ejs', {beautyProduct})
})

module.exports = router;
