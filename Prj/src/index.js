const express = require('express');
const handleBars = require('express-handlebars'); 
const { extension } = require('mime-types');
const morgan = require('morgan');
const path = require('path');

const route = require('./routes');
const db = require('./config/db');

// Db connect
db.connect();

const app = express();
const port = 3000;

app.use(express.urlencoded({
    extended: true,
}));
app.use(express.json());
app.use(express.static(path.join(__dirname , 'public')));

//HTTP logger
//app.use(morgan('combined'));

//Template engine
app.engine('handlebars', handleBars());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname + '/resources/views'));

// router init
route(app);


app.listen(port, () => {console.log(`listening on port ${port}`)});
