const express = require('express');
const app = express();
const PORT = 4000;// related to env file 
const beautyProductsControllers = require('./controllers/beautyProducts');
const kidsBooksControllers = require('./controllers/kidsBooks');
const vitaminsControllers = require('./controllers/vitamins');
const methodOverride = require('method-override');

app.set('view engine','ejs');
//ejs form to req.body
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));


app.get('/',(req,res)=>{
    res.render('home.ejs')
});


app.use('/beautyProducts', beautyProductsControllers);
app.use('', kidsBooksControllers);
app.use('', vitaminsControllers);

app.listen(PORT, ()=>{
    console.log(`💰💰💸 Listening port at ${PORT} 💸💰💰`);
});

