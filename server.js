// this places every kvp in our `.env`into a javascript object called `process.env`
require('dotenv').config()
// Require modules
const express = require('express');

// Require mongoose and db config
const mongoose = require('mongoose');
const db = mongoose.connection;
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true 
});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

// Create the Express app
const app = express();
// Enable use of JSX View Engine
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

//include the method-override package place this where you instructor places it
const methodOverride = require('method-override');

//after app has been defined
//use methodOverride.  We'll be adding a query parameter to our delete form named _method
app.use(methodOverride('_method'));


// Mount middleware (app.use) to pass data to a post route handler
app.use(express.urlencoded({extended: false}));
// ??? 
app.use((req, res, next) => {
    if (!global.currentUser) {
        global.currentUser = null;
    }
    next();
});

// Import models
const User = require('./models/User.js');
const Goods = require('./models/Goods.js');


// Mount routes
// app.get('/', (req, res) => {
// 	res.send('<h1>Hello Welfare Box!</h1>');
// });

const path = require('path'); // Add this line to include the path module
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'main.html'));
});


// TODO: Create the view
app.get('/signup', (req, res) => {
    res.render('SignUp.jsx');
});

app.post('/signup', (req, res) => {
    User.create(req.body)
    .then((user) => {
        console.log(user);
        global.currentUser = user;
        res.redirect('/foodForm');
    })
    .catch((error) => {
        console.log(error);
        // Handle error appropriately, e.g., render an error page
        res.status(500).send('Error creating user');
    });
});

app.get('/foodForm', (req, res) => {
    if (global.currentUser) {
        res.render('FoodForm.jsx', {user: global.currentUser});
    } else res.render('FoodForm.jsx');
});

app.post('/foodForm', (req, res) => {
    if (req.body.isAvailable === 'on') {
        req.body.isAvailable = true;
    } else req.body.isAvailable = false;

    Goods.create(req.body)
    .then((goods) => {
        console.log(goods);
        res.redirect('/foodForm');
    })
    .catch((error) => {
        console.log(error);
    })
});

// Create the server
app.listen(3000, () => {
	console.log('Listening on port 3000');
});
//  hello
// change 2