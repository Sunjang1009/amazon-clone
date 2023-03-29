const express = require('express');
const router = express.Router();
//mongoose connected Object
const { beautyProducts } = require('../models/index');

router.get('', async(req,res,next)=>{
    try {
        const myBeautyProducts = await beautyProducts.find({})
        console.log(myBeautyProducts);
        res.render('beautyProducts/index.ejs', {beautyProducts: myBeautyProducts});
    } catch(err){
        console.log(err)
        next();
    }
});

router.get('/new',(req,res)=>{
    res.render('beautyProducts/new.ejs');
});

router.get('/:id', async(req,res,next)=>{
    try{
        const myBeautyProduct = await beautyProducts.findById(req.params.id);
        res.render('beautyProducts/show.ejs', {beautyProduct: myBeautyProduct})
    } catch(err){
        console.log(err);
        next();
    }
})

router.post('', async (req,res,next)=>{
    try{
        const newBeautyProduct = beautyProducts.create(req.body);
        console.log(newBeautyProduct);
        // beautyProducts.push(req.body);
        res.redirect('/beautyProducts');

    } catch(err){
        console.log(err)
        next()
    }
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
