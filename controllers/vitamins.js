const express = require('express');
const router = express.Router();
const vitamins = require('../models/vitamins');
//simply show pages index, show
router.get('/vitamins',(req,res)=>{
    res.render('vitamins/index.ejs', {vitamins});
});

router.get('vitamins/:id',(req,res)=>{
    const vitamin = vitamins[req.params.id];
    res.render('vitamins/show.ejs',{vitamin})
})


module.exports = router;
