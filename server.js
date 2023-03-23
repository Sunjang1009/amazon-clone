const express = require('express');
const app = express();
const PORT = 4000;// related to env file 
const beautyProductsControllers = require('./controllers/beautyProducts');
const kidsBooksControllers = require('./controllers/kidsBooks');
const vitaminsControllers = require('./controllers/vitamins');

app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}));


app.get('/',(req,res)=>{
    res.render('home.ejs')
});

app.use('', beautyProductsControllers);
app.use('', kidsBooksControllers);
app.use('', vitaminsControllers);

app.listen(PORT, ()=>{
    console.log(`💰💰💸 Listening port at ${PORT} 💸💰💰`);
});

