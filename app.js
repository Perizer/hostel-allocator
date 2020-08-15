const path = require('path');

const express = require('express');
const bodyParser = require("body-parser");
const expressHbs = require('express-handlebars');

const app = express();

app.engine('hbs', 
expressHbs({
    layoutsDir: 'views/layouts/',
    defaultLayout: 'main-layout',
    extname: 'hbs'
})
);
app.set('view engine', 'hbs');
app.set('views', 'views');

const registerData = require('./routes/register');
const homeRoute = require('./routes/hostelList');

app.use(bodyParser.urlencoded({extended: true}));

port = 3000;

app.use(registerData.routes);

app.use(homeRoute);

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page not Found'})
});




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})