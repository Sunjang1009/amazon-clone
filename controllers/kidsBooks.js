const express = require('express');
const router = express.Router();
const kidsBooks = require('../models/kidsBooks');

router.get('/kidsBooks',(req,res)=>{
    res.render('kidsBooks/index.ejs', {kidsBooks});
});

router.get('/kidsBooks/new',(req,res)=>{
    res.render('kidsBooks/new.ejs')
})

router.get('/kidsBooks/:id',(req,res)=>{
    const kidsBook = kidsBooks[req.params.id];
    res.render('kidsBooks/show.ejs', {kidsBook});
});

router.post('/kidsBooks',(req,res)=>{
    const newKidBook = req.body;
    kidsBooks.push(newKidBook);
    res.redirect('/kidsBooks');
});

router.get('/kidsBooks/:id/edit',(req,res)=>{
    const kidsBookToBeEdited = kidsBooks[req.params.id]
    res.render('kidsBooks/edit.ejs' ,{kidsBookToBeEdited, idx:req.params.id});
});

router.put('/kidsBooks/:id',(req,res)=>{
    const editedKidBook = req.body;
    kidsBooks[req.params.id] = editedKidBook;
    res.redirect('/kidsBooks');
});




module.exports = router;
