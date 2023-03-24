const express = require('express');
const router = express.Router();
const beautyProducts = require('../models/BeautyProducts');

router.get('',(req,res)=>{
    res.render('beautyProducts/index.ejs', {beautyProducts});
});

router.get('/new',(req,res)=>{
    res.render('beautyProducts/new.ejs');
});

router.get('/:id',(req,res)=>{
    const beautyProduct = beautyProducts[req.params.id];
    res.render('beautyProducts/show.ejs', {beautyProduct})
})

router.post('',(req,res)=>{
    console.log(req.body);
    beautyProducts.push(req.body);
    res.redirect(`/${beautyProducts.length-1}`);
});

router.get('/:id/edit',(req,res)=>{
    const beautyProductToBeEdited = beautyProducts[req.params.id];
    res.render('beautyProducts/edit.ejs',{beautyProductToBeEdited, idx:req.params.id});
});

router.put('/:id',(req,res)=>{
    const beautyProductToBeUpdated = req.body;
    beautyProducts[req.params.id] = beautyProductToBeUpdated;
    res.redirect('/beautyProducts');
});

router.get('/:id/delete',(req,res)=>{
    const beautyProductToBeDeleted = beautyProducts[req.params.id];
    res.render('beautyProducts/delete.ejs', {beautyProductToBeDeleted, idx:req.params.id});
});

router.delete('/:id',(req,res)=>{
    const deletedBeautyProduct = beautyProducts[req.params.id];
    beautyProducts.splice(req.params.id, 1);
    res.redirect('/beautyProducts');
});

module.exports = router;
