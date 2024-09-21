const express = require('express');
const expressEjsLayout = require('express-ejs-layouts');
const port = 5000;
const routerHome = require('./routes/homeRoute');
const routerAdministrator = require('./routes/administratorRoute');

const app = express();

app.use(express.urlencoded({ extended: true }));


app.use(express.json());
app.set('view engine', 'ejs');
app.set('layout', './layout.ejs');

app.use(express.static('public'));
app.use(expressEjsLayout);

app.use('/', routerHome);
app.use('/administrator', routerAdministrator);


app.listen(port, () => {
    console.log(`servidor funcionando na porta: ${port}`);
})