const express = require('express');
const router = express.Router();
const beautyProducts = require('../models/BeautyProducts');

router.get('/beautyProducts',(req,res)=>{
    res.render('beautyProducts/index.ejs', {beautyProducts});
});

router.get('/beautyProducts/new',(req,res)=>{
    res.render('beautyProducts/new.ejs');
});

router.get('/beautyProducts/:id',(req,res)=>{
    const beautyProduct = beautyProducts[req.params.id];
    res.render('beautyProducts/show.ejs', {beautyProduct})
})

router.post('/beautyProducts',(req,res)=>{
    console.log(req.body);
    beautyProducts.push(req.body);
});

module.exports = router;
