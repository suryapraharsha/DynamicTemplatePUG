
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');


const app = express();


app.set('view engine','pug'); //telling express that we wanna compile dynamic templates with pug engine 

app.set('views','views'); // and this is the place you can find these templates


const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended : false}));

app.use(express.static(path.join(__dirname,'public')));
app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    //res.status(404).sendFile(path.join(__dirname,'views','pageNotFound.html'));
    res.status(404).render('pageNotFound',{pageTitle :"Page Not Found!!"})

})





app.listen(3000);

